package com.hotel.managementsystem.repository;

import com.hotel.managementsystem.entity.Bill;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface BillRepository extends JpaRepository<Bill, Integer> {
    // You can define custom queries here if needed
    // Example: Find a bill by reservation ID
    Bill findByReservationId(int reservationId);
}
