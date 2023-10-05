package com.nguyenhungkhang.DemoForTest.services.imp;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.nguyenhungkhang.DemoForTest.model.PostFile;
import com.nguyenhungkhang.DemoForTest.repository.IPostFileRepository;
import com.nguyenhungkhang.DemoForTest.services.IPostFileService;

@Service
public class PostFileService implements IPostFileService {

	@Autowired
	private IPostFileRepository postFileRepository;
	
	@Override
	public List<PostFile> getAll() {
		return (List<PostFile>) postFileRepository.findAll();
	}

	@Override
	public void save(PostFile postFile) {
		postFileRepository.save(postFile);
	}

	@Override
	public void delete(Long id) {
		postFileRepository.deleteById(id);
	}

	@Override
	public Optional<PostFile> findById(Long id) {
		return postFileRepository.findById(id);
	}

}
