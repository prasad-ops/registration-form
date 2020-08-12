package com.icinBank.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.icinBank.dao.RegistrationDAO;
import com.icinBank.model.RegistrationClass;
import com.icinBank.service.RegistrationService;

@Service
public class RegistrationServiceImpl implements RegistrationService {
	
	@Autowired
	private RegistrationDAO dao;

	@Override
	public RegistrationClass CreateUser(RegistrationClass user) {
		
		return dao.save(user);
	}

}
