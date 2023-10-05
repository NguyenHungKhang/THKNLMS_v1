package com.nguyenhungkhang.DemoForTest.services;

import java.util.List;
import java.util.Optional;

import com.nguyenhungkhang.DemoForTest.model.PostFile;

public interface IPostFileService {
	List<PostFile> getAll();
	void save(PostFile postFile);
	void delete(Long id);
	Optional<PostFile> findById(Long id);
}
