package com.nguyenhungkhang.DemoForTest.services;

import java.util.List;
import java.util.Optional;

import com.nguyenhungkhang.DemoForTest.model.PostSection;

public interface IPostSectionService {
	List<PostSection> getAll();	
	void save(PostSection postSection);
	void delete(Long id);
	Optional<PostSection> findById(Long id);
}
