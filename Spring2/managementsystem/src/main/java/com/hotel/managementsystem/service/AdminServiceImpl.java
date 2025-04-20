package com.hotel.managementsystem.service;

import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.stereotype.Service;

import com.hotel.managementsystem.entity.Admin;
import com.hotel.managementsystem.repository.AdminRepository;


@Service
public class AdminServiceImpl implements AdminService {
	
	@Autowired
	AdminRepository repository;
	@Override
	public boolean adminLogin(String adminName, String password) {
		Admin admin = repository.findByAdminName(adminName);
		if(admin!=null && admin.getPassword().equals(password))  return true;
		return false;
	}

}
