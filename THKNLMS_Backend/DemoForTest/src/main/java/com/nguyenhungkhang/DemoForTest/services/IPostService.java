package com.nguyenhungkhang.DemoForTest.services;

import java.util.List;
import java.util.Optional;

import com.nguyenhungkhang.DemoForTest.model.Post;

public interface IPostService {
	List<Post> getAll();
	void save(Post post);
	void delete(Long id);
	Optional<Post> findById(Long id)
;}
