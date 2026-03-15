package com.sunbeam.service;

import java.util.List;

import com.sunbeam.entities.Person;

public interface PersonService 
{
	 Person postPerson(Person person);
	 
	 List<Person> findAllPerson();
	 
	 void deleteById(Long id);
	 
	 Person findById(Long id);
	 
	 Person updatePerson(Person person);

}
