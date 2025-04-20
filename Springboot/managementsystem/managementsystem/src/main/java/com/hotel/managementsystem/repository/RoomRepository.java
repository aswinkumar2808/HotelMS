package com.hotel.managementsystem.repository;

import com.hotel.managementsystem.entity.Room;
import org.springframework.data.jpa.repository.JpaRepository;

public interface RoomRepository extends JpaRepository<Room, Integer> {

    Room findFirstByRoomTypeAndStatus(String roomType, String status);
    Room findByRoomNumber(String roomNumber);

}
