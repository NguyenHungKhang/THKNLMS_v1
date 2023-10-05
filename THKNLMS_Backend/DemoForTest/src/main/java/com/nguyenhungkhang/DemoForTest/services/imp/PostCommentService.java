package com.nguyenhungkhang.DemoForTest.services.imp;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.nguyenhungkhang.DemoForTest.model.PostComment;
import com.nguyenhungkhang.DemoForTest.repository.IPostCommentRepository;
import com.nguyenhungkhang.DemoForTest.services.IPostCommentService;

@Service
public class PostCommentService implements IPostCommentService {

	@Autowired
	private IPostCommentRepository postCommentRepository;
	
	@Override
	public List<PostComment> getAll() {
		return (List<PostComment>) postCommentRepository.findAll();
	}

	@Override
	public void save(PostComment postComment) {
		postCommentRepository.save(postComment);
	}

	@Override
	public void delete(Long id) {
		postCommentRepository.deleteById(id);
	}

	@Override
	public Optional<PostComment> findById(Long id) {
		return postCommentRepository.findById(id);
	}

}
