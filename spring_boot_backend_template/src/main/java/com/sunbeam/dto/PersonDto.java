package com.sunbeam.dto;

import java.time.LocalDateTime;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;


@Data                        // Getter + Setter + ToString + EqualsAndHashCode
@Builder                     // Builder pattern for fluent object creation
@NoArgsConstructor           // Empty constructor: PersonDTO()
@AllArgsConstructor          // Constructor with all fields: PersonDTO(id, name, phone...)
public class PersonDto {
	
	private Long id;
    private String name;
    private String phone;
    private String building;
    private String flat;
    private LocalDateTime currentDateTime;
    
 // You can add custom constructors too: 
    public PersonDto(String name, String phone, String building, String flat) 
    {
        this.name = name;
        this.phone = phone;
        this.building = building;
        this.flat = flat;
        this.currentDateTime = LocalDateTime.now();
    }

}
