package com.hotel.managementsystem.dto;

public class AdminLoginDto {
	private String adminName;
	private String password;
	public AdminLoginDto() {
		super();
	}
	public AdminLoginDto(String adminName, String password) {
		super();
		this.adminName = adminName;
		this.password = password;
	}
	public String getAdminName() {
		return adminName;
	}
	public void setAdminName(String adminName) {
		this.adminName = adminName;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
}
