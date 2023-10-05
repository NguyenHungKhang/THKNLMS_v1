package com.nguyenhungkhang.DemoForTest.services.imp;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.nguyenhungkhang.DemoForTest.model.Post;
import com.nguyenhungkhang.DemoForTest.repository.IPostRepository;
import com.nguyenhungkhang.DemoForTest.services.IPostService;

@Service
public class PostService implements IPostService {

	@Autowired
	private IPostRepository postRepository;
	
	@Override
	public List<Post> getAll() {
		return (List<Post>) postRepository.findAll();
	}

	@Override
	public void save(Post post) {
		postRepository.save(post);
	}

	@Override
	public void delete(Long id) {
		postRepository.deleteById(id);
	}

	@Override
	public Optional<Post> findById(Long id) {
		return postRepository.findById(id);
	}

}
