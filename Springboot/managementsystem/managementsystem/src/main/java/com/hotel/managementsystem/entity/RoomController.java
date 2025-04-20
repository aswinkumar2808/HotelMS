package com.hotel.managementsystem.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.hotel.managementsystem.entity.Room;
import com.hotel.managementsystem.repository.RoomRepository;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/api/rooms")
public class RoomController {

    @Autowired
    private RoomRepository roomRepository;

    @GetMapping
    public List<Room> getAllRooms() {
        return roomRepository.findAll();
    }

    @PutMapping("/{roomNumber}")
    public Room updateRoomByNumber(@PathVariable String roomNumber, @RequestBody Room roomDetails) {
        Room room = roomRepository.findByRoomNumber(roomNumber);
        if (room == null) {
            throw new RuntimeException("Room not found with room number: " + roomNumber);
        }

        room.setStatus(roomDetails.getStatus());

        if ("vacant".equalsIgnoreCase(roomDetails.getStatus())) {
            room.setReservationId(null);
        } else {
            room.setReservationId(roomDetails.getReservationId());
        }

        return roomRepository.save(room);
    }

}
