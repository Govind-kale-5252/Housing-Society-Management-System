package com.sunbeam.entities;

import java.time.LocalDateTime;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.PrePersist;
import jakarta.persistence.Table;
import jakarta.validation.constraints.NotBlank;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name = "persons")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Person {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "id")
	private Long id;
	
	@NotBlank(message = "Name is required")
	@Column(name = "name", nullable = false, length = 50)
	private String name;
	
	@NotBlank(message = "Phone is required")
	@Column(name = "phone", nullable = false, unique = true, length = 15)
	private String phone;
	
	@NotBlank(message = "building is required")
	@Column(name = "building", nullable = false, length = 50)
	private String building;
	
	@NotBlank(message = "flat is required")
	@Column(name = "flat", nullable = false, length = 10)
	private String flat;
	
	@Column(name = "current_date_time")
	private LocalDateTime currentDateTime;
	
	@PrePersist
    public void prePersist() {   
            currentDateTime = LocalDateTime.now();         
    }
	 
}
