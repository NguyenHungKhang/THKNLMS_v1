package com.nguyenhungkhang.DemoForTest.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import com.nguyenhungkhang.DemoForTest.model.User;

@Repository
public interface IUserRepository extends JpaRepository<User, Long> {
	
	@Query(nativeQuery = true, value = "SELECT * FROM user u WHERE u.email = ?1")
    Optional<User> findByEmail(String email);
	
	@Modifying
	@Query(nativeQuery = true, value = "INSERT INTO user(givenName, familyName, email, picture) VALUES (?1, ?2, ?3, ?4)")
	@Transactional
	void saveOauth2User (String givenName, String familyName, String email, String picture);
}
