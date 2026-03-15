package com.sunbeam.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.sunbeam.entities.Person;
import com.sunbeam.service.PersonService;

import jakarta.persistence.EntityNotFoundException;

@RestController
@RequestMapping("/person")
@CrossOrigin(origins = "*")
public class PersonController {

	@Autowired
	private PersonService personService;
	
	@PostMapping("add")
	public Person postPerson(@RequestBody Person person)
	{
		return personService.postPerson(person);
		
	}
	
	@GetMapping("getAll")
	public List<Person> findAllPerson()
	
	{
		return personService.findAllPerson();		
	}
	
	@DeleteMapping("delete/{id}")
	public ResponseEntity<?> deletePerson(@PathVariable Long id)
	{
		try 
		{
			personService.deleteById(id);
			return new ResponseEntity<>("Person with ID " + id + " deleted successfully", HttpStatus.OK);	
		
		} catch(EntityNotFoundException e)
		{
			return new ResponseEntity<>(e.getMessage(), HttpStatus.NOT_FOUND);
		}
		
	}
	
	@GetMapping("get/{id}")
	public ResponseEntity<?> getPersonById(@PathVariable Long id)
	{
		Person person = personService.findById(id);
		
		if(person == null)
		{
			return ResponseEntity.notFound().build();
		}
		return ResponseEntity.ok(person);
		
	}
	
	
	@PutMapping("update")
	public ResponseEntity<?> updatePerson(@RequestBody Person person)
	{
		Person updatedPerson = personService.updatePerson(person);
		
		if(updatedPerson == null)
		{
			return ResponseEntity.status(HttpStatus.BAD_REQUEST).build();
		}
		return ResponseEntity.ok(updatedPerson);
		
	}
}
