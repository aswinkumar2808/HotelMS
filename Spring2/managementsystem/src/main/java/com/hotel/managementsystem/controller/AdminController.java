package com.hotel.managementsystem.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.hotel.managementsystem.dto.AdminLoginDto;
import com.hotel.managementsystem.service.AdminService;
@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/admin")
public class AdminController {
	
	@Autowired
	AdminService service;
	
	@PostMapping("/login")
	public ResponseEntity<AdminLoginDto> loginAdmin(@RequestBody AdminLoginDto dto){
		try {
			boolean found = service.adminLogin(dto.getAdminName(),dto.getPassword());
			if(found) return new ResponseEntity<AdminLoginDto>(dto,HttpStatus.OK);
			return new ResponseEntity<AdminLoginDto>(dto,HttpStatus.UNAUTHORIZED);
		}
		catch(Exception exception) {
			return new ResponseEntity<AdminLoginDto>(HttpStatus.INTERNAL_SERVER_ERROR);
		}	
	}	
}
