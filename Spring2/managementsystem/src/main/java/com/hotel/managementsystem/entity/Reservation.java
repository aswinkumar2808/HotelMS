package com.hotel.managementsystem.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
@Entity
@Table(name="reservation")
public class Reservation {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	
	@Column(name="checkInDate")
	private String checkInDate;
	
	@Column(name="checkOutDate")
	private String checkOutDate;
	
	@Column(name="roomPreference")
	private String roomPreference;
	
	@Column(name="name")
	private String name;
	
	@Column(name="contact")
	private long contact;
	
	@Column(name="userId")
	private int userId;
	
	
	public Reservation() {
		super();
		// TODO Auto-generated constructor stub
	}
	
	
	public Reservation(int id, String checkInDate, String checkOutDate, String roomPreference, String name, long contact,
			int userId) {
		super();
		this.id = id;
		this.checkInDate = checkInDate;
		this.checkOutDate = checkOutDate;
		this.roomPreference = roomPreference;
		this.name = name;
		this.contact = contact;
		this.userId = userId;
	}


	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}
	public String getCheckInDate() {
		return checkInDate;
	}
	public void setCheckInDate(String checkInDate) {
		this.checkInDate = checkInDate;
	}
	public String getCheckOutDate() {
		return checkOutDate;
	}
	public void setCheckOutDate(String checkOutDate) {
		this.checkOutDate = checkOutDate;
	}
	public String getRoomPreference() {
		return roomPreference;
	}
	public void setRoomPreference(String roomPreference) {
		this.roomPreference = roomPreference;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public long getContact() {
		return contact;
	}
	public void setContact(long contact) {
		this.contact = contact;
	}
	public int getUserId() {
		return userId;
	}
	public void setUserId(int userId) {
		this.userId = userId;
	}
}
