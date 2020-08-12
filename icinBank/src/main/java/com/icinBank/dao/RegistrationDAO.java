package com.icinBank.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.icinBank.model.RegistrationClass;

@Repository
public interface RegistrationDAO extends JpaRepository<RegistrationClass, Integer> {
	

}
