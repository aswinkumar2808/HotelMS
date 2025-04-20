package com.hotel.managementsystem.dto;

public class UserDto {
	
	//private int userId;
	private String name;
	private String email;
	private String mobileNumber;
	private String address;
	private String loginId;
	private String password;
	public UserDto() {
		super();
	}
	public UserDto( String name, String email, String mobileNumber, String address, String loginId,
			String password) {
		super();
		//this.userId = userId;
		this.name = name;
		this.email = email;
		this.mobileNumber = mobileNumber;
		this.address = address;
		this.loginId = loginId;
		this.password = password;
	}
//	public int getUserId() {
//		return userId;
//	}
//	public void setUserId(int userId) {
//		this.userId = userId;
//	}
	public String getName() {
		return name;
	}
	public void setUserName(String name) {
		this.name = name;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getMobileNumber() {
		return mobileNumber;
	}
	public void setMobileNumber(String mobileNumber) {
		this.mobileNumber = mobileNumber;
	}
	public String getAddress() {
		return address;
	}
	public void setAddress(String address) {
		this.address = address;
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
