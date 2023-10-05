package com.nguyenhungkhang.DemoForTest.services;

import java.util.List;
import java.util.Optional;

import com.nguyenhungkhang.DemoForTest.model.Section;

public interface ISectionService {
	List<Section> getAll();
	void save(Section section);
	void delete(Long id);
	Optional<Section> findById(Long id);
}
