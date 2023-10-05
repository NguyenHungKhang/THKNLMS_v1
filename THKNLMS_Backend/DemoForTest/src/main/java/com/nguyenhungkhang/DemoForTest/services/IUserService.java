package com.nguyenhungkhang.DemoForTest.services;

import java.util.List;
import java.util.Optional;

import org.springframework.security.oauth2.core.user.OAuth2User;

import com.nguyenhungkhang.DemoForTest.dto.IdTokenRequestDto;
import com.nguyenhungkhang.DemoForTest.model.User;

public interface IUserService {
	List<User> getAll();
	void save(User user);
	void delete(Long id);
	Optional<User> findById(Long id);
	Optional<User> findByEmail(String email);
	String processOAuthPostLogin(String idToken);
	User verifyIDToken(String idToken);
}
