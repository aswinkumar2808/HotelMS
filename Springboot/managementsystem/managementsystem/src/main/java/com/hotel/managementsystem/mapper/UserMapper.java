package com.hotel.managementsystem.mapper;

import com.hotel.managementsystem.dto.UserDto;
import com.hotel.managementsystem.entity.Users;

public class UserMapper {
	public static UserDto convertEntityToDto(Users user) {
		UserDto dto = new UserDto();
	//	dto.setUserId(user.getUserId());
		dto.setUserName(user.getName());
		dto.setEmail(user.getEmail());
		dto.setMobileNumber(user.getMobileNumber());
		dto.setAddress(user.getAddress());
		dto.setLoginId(user.getLoginId());
		dto.setPassword(user.getPassword());
		return dto;
	}
	
	public static Users convertDtoToEntity(UserDto dto) {
		Users user = new Users();
	//	user.setUserId(dto.getUserId());
		user.setUserName(dto.getName());
		user.setEmail(dto.getEmail());
		user.setMobileNumber(dto.getMobileNumber());
		user.setAddress(dto.getAddress());
		user.setLoginId(dto.getLoginId());
		user.setPassword(dto.getPassword());
		return user;
	}
}
