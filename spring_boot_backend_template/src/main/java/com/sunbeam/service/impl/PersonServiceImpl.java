package com.sunbeam.service.impl;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.sunbeam.dao.PersonDao;
import com.sunbeam.entities.Person;
import com.sunbeam.service.PersonService;

import jakarta.persistence.EntityNotFoundException;

@Service
public class PersonServiceImpl implements PersonService {

	@Autowired
	private PersonDao personDao;
	
	@Override
	public Person postPerson(Person person) 
	{	 
		return personDao.save(person);
	}

	@Override
	public List<Person> findAllPerson() {
		 
		return personDao.findAll();
	}

	@Override
	public void deleteById(Long id) 
	{
		 if(personDao.existsById(id))
		 {
			 personDao.deleteById(id);
		 }
		 else
		 {
			 throw new EntityNotFoundException("Person with Id " + id + " not found");
		 }
		 
	}

	@Override
	public Person findById(Long id) {
		
		if(id == null)
		{
			throw new IllegalArgumentException("Person ID must not be null");
		}
		
		return personDao.findById(id).orElseThrow(() -> new RuntimeException("Person not found with id: " + id));
	}

	@Override
	public Person updatePerson(Person person) 
	{
		Long id = person.getId();
		
		if(id == null)
		{
			throw new IllegalArgumentException("Person ID must not be null for update");
		}
		
		 
		Person existingPerson = personDao.findById(id).orElseThrow(() -> new RuntimeException("Person not found with id: " + id));
		
		existingPerson.setName(person.getName());
		existingPerson.setPhone(person.getPhone());
		existingPerson.setBuilding(person.getBuilding());
		existingPerson.setFlat(person.getFlat());
		
		return personDao.save(existingPerson);
	 
}
	  

}
