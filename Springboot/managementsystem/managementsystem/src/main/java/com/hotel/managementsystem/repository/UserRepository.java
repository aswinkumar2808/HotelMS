package com.hotel.managementsystem.repository;

import com.hotel.managementsystem.dto.LoginDto;
import com.hotel.managementsystem.dto.UserDto;
import com.hotel.managementsystem.entity.Users;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends JpaRepository<Users,Integer> {
	@Query(value = "SELECT * FROM Users  WHERE login_Id = ?1", nativeQuery = true)
	Users findByLoginId(String loginId);
}
