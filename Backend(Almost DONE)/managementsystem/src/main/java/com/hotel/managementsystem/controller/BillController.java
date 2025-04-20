package com.hotel.managementsystem.controller;

import com.hotel.managementsystem.entity.Bill;
import com.hotel.managementsystem.service.BillService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/billing")
@CrossOrigin(origins = "http://localhost:4200")
public class BillController {

    @Autowired
    private BillService billService;

    @PostMapping("/generate")
    public Bill generateBill(@RequestBody Bill request) {
        return billService.generateBill(
            request.getReservationId(),
            request.getUserId(),
            request.getRoomCharge(),
            request.getServiceCharge()
        );
    }

    @PutMapping("/{billId}/pay")
    public Bill markAsPaid(@PathVariable int billId) {
        return billService.updatePaymentStatus(billId);
    }

    @GetMapping("/{billId}")
    public Bill getBill(@PathVariable int billId) {
        return billService.getBillById(billId);
    }
}
