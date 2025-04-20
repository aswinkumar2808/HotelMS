package com.hotel.managementsystem.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
//import org.springframework.web.client.HttpClientErrorException.NotFound;

import com.hotel.managementsystem.dto.LoginDto;
import com.hotel.managementsystem.dto.UserDto;
import com.hotel.managementsystem.entity.Reservation;
import com.hotel.managementsystem.exception.NotFound;
import com.hotel.managementsystem.repository.ReservationRepository;
import com.hotel.managementsystem.service.ReservationService;
import com.hotel.managementsystem.service.UserService;
@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/")
public class UserController {
	
	@Autowired
	UserService service;
	@Autowired
	ReservationRepository reservationRepository;
	@Autowired
	ReservationService reservationService;
	@PostMapping("/signup")
	public ResponseEntity<UserDto> registerUser(@RequestBody UserDto dto){
		try {
			UserDto user = service.userRegistration(dto);
			if(user!=null) return new ResponseEntity<UserDto>(user,HttpStatus.CREATED);
			return new ResponseEntity<UserDto>(HttpStatus.BAD_REQUEST);
		}
		catch(Exception exception) {
			return new ResponseEntity<UserDto>(HttpStatus.INTERNAL_SERVER_ERROR);
		}		
	}
	
	@PostMapping("/login")
	public ResponseEntity<LoginDto> loginUser(@RequestBody LoginDto dto){
		try {
			LoginDto loggedUser = service.userLogin(dto.getLoginId(),dto.getPassword());
			if(loggedUser!=null) return new ResponseEntity<LoginDto>(loggedUser,HttpStatus.OK);
			return new ResponseEntity<LoginDto>(dto,HttpStatus.UNAUTHORIZED);
		}
		catch(Exception exception) {
			return new ResponseEntity<LoginDto>(HttpStatus.INTERNAL_SERVER_ERROR);
		}	
	}	
	
	@GetMapping("/employees")
	public List<Reservation> getAllEmployees()
	{
		return reservationRepository.findAll();
	}
	
	 @PostMapping("/reservations")
	    public Reservation createReservation(@RequestBody Reservation reservation) {
	        return reservationService.createReservation(reservation);
	    }
	
	
	
	 @GetMapping("/reservations")
	 public List<Reservation> getReservationsByUserId(@RequestParam int userId) {
	     return reservationService.getByUserId(userId);
	 }

	
	@PutMapping("/employee/{id}")
	public ResponseEntity<Reservation> updateReservation(@PathVariable int id, @RequestBody Reservation reservation)
	{
		Reservation emp = reservationRepository.findById(id).orElseThrow(() -> new NotFound("Employee not exist with id: "+id));
		
		emp.setCheckInDate(reservation.getCheckInDate());
		emp.setCheckOutDate(reservation.getCheckOutDate());
		emp.setRoomPreference(reservation.getRoomPreference());
		emp.setName(reservation.getName());
		emp.setContact(reservation.getContact());
		
		reservationRepository.save(emp);
		
		return ResponseEntity.ok(emp);
	}
	
	@DeleteMapping("/employee/{id}")
	public ResponseEntity<Map<String, Boolean>> deleteReservation(@PathVariable int id)
	{
		Reservation emp = reservationRepository.findById(id).orElseThrow(() -> new NotFound("Reservation not exist with id: "+id));
		
		reservationRepository.delete(emp);
		
		Map<String, Boolean> response = new  HashMap<String, Boolean>();
		
		response.put("delete", Boolean.TRUE);
		
		return ResponseEntity.ok(response);
	}
}
