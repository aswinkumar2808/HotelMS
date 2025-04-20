package com.hotel.managementsystem.service;

import com.hotel.managementsystem.entity.Bill;
import com.hotel.managementsystem.repository.BillRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class BillServiceImpl implements BillService {

    @Autowired
    private BillRepository billRepository;

    public Bill generateBill(int reservationId, int userId, double roomCharge, double serviceCharge) {
        Bill bill = new Bill();
        bill.setReservationId(reservationId);
        bill.setUserId(userId);
        bill.setRoomCharge(roomCharge);
        bill.setServiceCharge(serviceCharge);
        bill.setTotalAmount(roomCharge + serviceCharge);
        bill.setStatus("Pending");

        return billRepository.save(bill);
    }

    public Bill updatePaymentStatus(int billId) {
        Bill bill = billRepository.findById(billId).orElseThrow(() -> new RuntimeException("Bill not found"));
        bill.setStatus("Paid");
        return billRepository.save(bill);
    }

    public Bill getBillById(int billId) {
        return billRepository.findById(billId).orElse(null);
    }
}
