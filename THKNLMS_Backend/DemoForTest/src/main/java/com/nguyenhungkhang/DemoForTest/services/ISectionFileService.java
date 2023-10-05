package com.nguyenhungkhang.DemoForTest.services;

import java.util.List;
import java.util.Optional;

import com.nguyenhungkhang.DemoForTest.model.SectionFile;

public interface ISectionFileService {
	List<SectionFile> getAll();
	void save(SectionFile sectionFile);
	void delete(Long id);
	Optional<SectionFile> findById(Long id);
}
