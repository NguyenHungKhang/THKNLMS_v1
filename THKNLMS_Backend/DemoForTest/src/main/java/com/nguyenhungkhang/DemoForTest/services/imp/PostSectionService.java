package com.nguyenhungkhang.DemoForTest.services.imp;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.nguyenhungkhang.DemoForTest.model.PostSection;
import com.nguyenhungkhang.DemoForTest.repository.IPostSectionRepository;
import com.nguyenhungkhang.DemoForTest.services.IPostSectionService;

@Service
public class PostSectionService implements IPostSectionService {

	@Autowired
	private IPostSectionRepository postSectionRepository;
	
	@Override
	public List<PostSection> getAll() {
		return (List<PostSection>) postSectionRepository.findAll();
	}

	@Override
	public void save(PostSection postSection) {
		postSectionRepository.save(postSection);
	}

	@Override
	public void delete(Long id) {
		postSectionRepository.deleteById(id);
	}

	@Override
	public Optional<PostSection> findById(Long id) {
		return postSectionRepository.findById(id);
	}

}
