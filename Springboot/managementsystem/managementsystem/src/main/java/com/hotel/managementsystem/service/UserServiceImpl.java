package com.hotel.managementsystem.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.hotel.managementsystem.dto.LoginDto;
import com.hotel.managementsystem.dto.UserDto;
import com.hotel.managementsystem.entity.Users;
import com.hotel.managementsystem.mapper.UserMapper;
import com.hotel.managementsystem.repository.UserRepository;

@Service
public class UserServiceImpl implements UserService{
	@Autowired
	UserRepository repository;

	@Override
	public UserDto userRegistration(UserDto userDto) {
		Users user = UserMapper.convertDtoToEntity(userDto);
		Users createdUser = repository.save(user);
		return UserMapper.convertEntityToDto(createdUser);
	}

	@Override
	public LoginDto userLogin(String loginId, String password) {
		Users user = repository.findByLoginId(loginId);
		if(user!=null && user.getPassword().equals(password))  {
			LoginDto dto = new LoginDto();
			dto.setUserId(user.getUserId());
			dto.setLoginId(user.getLoginId());
			return dto;
		}
		return null;
		
	}

}
