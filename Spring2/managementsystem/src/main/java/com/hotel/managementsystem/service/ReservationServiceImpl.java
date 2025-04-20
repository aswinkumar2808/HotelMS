package com.hotel.managementsystem.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.hotel.managementsystem.entity.Reservation;
import com.hotel.managementsystem.entity.Room;
import com.hotel.managementsystem.repository.ReservationRepository;
import com.hotel.managementsystem.repository.RoomRepository;

@Service
public class ReservationServiceImpl implements ReservationService {

    @Autowired
    private ReservationRepository reservationRepository;

    @Autowired
    private RoomRepository roomRepository;

    public Reservation createReservation(Reservation reservation) {
        try {
            // Step 1: Check for the first available room based on the room preference
            Room availableRoom = roomRepository.findFirstByRoomTypeAndStatus(reservation.getRoomPreference(), "available");

            // If no available room is found, throw an exception
            if (availableRoom == null) {
                throw new RuntimeException("No available room for the selected type.");
            }

            // Step 2: Save the reservation first to generate the ID
            Reservation savedReservation = reservationRepository.save(reservation);

            // Step 3: Update the room's status to 'booked' and link it to the reservationId
            availableRoom.setStatus("booked");
            availableRoom.setReservationId(savedReservation.getId());  // ✅ Set reservation ID instead of object

            // Step 4: Save the updated room status
            roomRepository.save(availableRoom);

            return savedReservation;

        } catch (Exception ex) {
            ex.printStackTrace();
            throw new RuntimeException("Error creating reservation.", ex);
        }
    }


}
