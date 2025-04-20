package com.hotel.managementsystem.dto;

public class LoginDto {
	private int userId;
	private String loginId;
	private String password;
	public LoginDto() {
		super();
	}
	public LoginDto(int userId,String loginId, String password) {
		super();
		this.loginId = loginId;
		this.password = password;
	}
	public void setUserId(int userId) {
		this.userId= userId;
	}
	public int getUserId() {
		return userId;
	}
	public String getLoginId() {
		return loginId;
	}
	public void setLoginId(String loginId) {
		this.loginId = loginId;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	
}
