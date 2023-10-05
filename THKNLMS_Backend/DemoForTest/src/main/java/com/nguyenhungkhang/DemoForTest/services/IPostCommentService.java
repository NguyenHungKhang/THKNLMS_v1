package com.nguyenhungkhang.DemoForTest.services;

import java.util.List;
import java.util.Optional;

import com.nguyenhungkhang.DemoForTest.model.PostComment;

public interface IPostCommentService {
	List<PostComment> getAll();
	void save(PostComment postComment);
	void delete(Long id);
	Optional<PostComment> findById(Long id);
}
