package com.nguyenhungkhang.DemoForTest.services.imp;

import java.security.GeneralSecurityException;
import java.util.Collections;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

import com.google.api.client.googleapis.auth.oauth2.GoogleIdToken;
import com.google.api.client.googleapis.auth.oauth2.GoogleIdTokenVerifier;
import com.google.api.client.http.javanet.NetHttpTransport;
import com.google.api.client.json.JsonFactory;
import com.google.api.client.json.gson.GsonFactory;
import com.nguyenhungkhang.DemoForTest.config.JWTUtils;
import com.nguyenhungkhang.DemoForTest.model.User;
import com.nguyenhungkhang.DemoForTest.repository.IUserRepository;
import com.nguyenhungkhang.DemoForTest.services.IUserService;

import io.jsonwebtoken.io.IOException;

@Service
public class UserService implements IUserService {

	@Autowired
	private IUserRepository userRepository;

	private GoogleIdTokenVerifier verifier;
	
	@Autowired
	private  JWTUtils jwtUtils;

	@Value("${app.googleClientId}")
	private String googleClientId;

	@Override
	public List<User> getAll() {
		return (List<User>) userRepository.findAll();
	}

	@Override
	public void save(User user) {
		userRepository.save(user);
	}

	@Override
	public void delete(Long id) {
		userRepository.deleteById(id);
	}

	@Override
	public Optional<User> findById(Long id) {
		return userRepository.findById(id);
	}

	@Override
	public String processOAuthPostLogin(String idToken) {
		User user = verifyIDToken(idToken);
		if (user == null) {
			throw new IllegalArgumentException();
		}
		Optional<User> existUser = userRepository.findByEmail(user.getEmail());
		if (existUser.isEmpty()){
			user.setRole("USER");
			userRepository.save(user);
		} else {
			user.setGivenName(existUser.get().getGivenName());
			user.setFamilyName(existUser.get().getFamilyName());
			user.setPicture(existUser.get().getPicture());
		}
		Optional<User> updatedUser = userRepository.findByEmail(user.getEmail());
		return jwtUtils.createToken(updatedUser.get(), false);
	}

	@Override
	public Optional<User> findByEmail(String email) {
		return userRepository.findByEmail(email);
	}

	public User verifyIDToken(String idToken) {

		NetHttpTransport transport = new NetHttpTransport();
		JsonFactory jsonFactory = new GsonFactory();
		verifier = new GoogleIdTokenVerifier.Builder(transport, jsonFactory)
				.setAudience(Collections.singletonList(googleClientId)).build();

		try {
			GoogleIdToken idTokenObj = verifier.verify(idToken);
			if (idTokenObj == null) {
				return null;
			}
			User user = new User();
			GoogleIdToken.Payload payload = idTokenObj.getPayload();
			user.setGivenName((String) payload.get("given_name"));
			user.setFamilyName((String) payload.get("family_name"));
			user.setPicture((String) payload.get("picture"));
			user.setEmail(payload.getEmail());
			return user;

		} catch (GeneralSecurityException | IOException e) {
			return null;
		} catch (java.io.IOException e) {
			e.printStackTrace();
			return null;
		}
	}
}
