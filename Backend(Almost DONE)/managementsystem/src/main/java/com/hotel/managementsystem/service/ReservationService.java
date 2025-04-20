package com.hotel.managementsystem.service;

import java.util.List;

import com.hotel.managementsystem.entity.Reservation;

public interface ReservationService {
	Reservation createReservation(Reservation reservation);
	List<Reservation> getByUserId(int userId);
}
