package com.sunbeam.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.sunbeam.entities.Person;

@Repository
public interface PersonDao extends JpaRepository<Person, Long>{

}