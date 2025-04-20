package com.hotel.managementsystem.service;

import com.hotel.managementsystem.entity.Bill;

public interface BillService {
	Bill generateBill(int reservationId, int userId, double roomCharge, double serviceCharge) ;
	Bill updatePaymentStatus(int billId);
	Bill getBillById(int billId);
}
