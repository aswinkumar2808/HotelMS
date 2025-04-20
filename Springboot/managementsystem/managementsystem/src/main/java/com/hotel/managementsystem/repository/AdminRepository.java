package com.hotel.managementsystem.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.hotel.managementsystem.entity.Admin;
@Repository
public interface AdminRepository extends JpaRepository<Admin,Integer>{
	@Query(value = "SELECT * FROM Admin  WHERE admin_Name = ?1", nativeQuery = true)
	Admin findByAdminName(String adminName);
}
