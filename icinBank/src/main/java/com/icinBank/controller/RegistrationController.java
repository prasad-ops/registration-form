package com.icinBank.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.icinBank.model.RegistrationClass;
import com.icinBank.service.RegistrationService;

@RestController
@CrossOrigin(origins= "http://localhost:4200")
public class RegistrationController {
	
	@Autowired
	private RegistrationService service;

	
	@PostMapping("/registration")
	public RegistrationClass CreateUser(@RequestBody RegistrationClass user) {
		
		return service.CreateUser(user);
		
	}
	
	

}
