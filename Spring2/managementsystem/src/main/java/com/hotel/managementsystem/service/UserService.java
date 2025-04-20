package com.hotel.managementsystem.service;

import com.hotel.managementsystem.dto.LoginDto;
import com.hotel.managementsystem.dto.UserDto;

public interface UserService {
	UserDto userRegistration(UserDto userDto);
	
	LoginDto userLogin(String loginId,String password);
}
