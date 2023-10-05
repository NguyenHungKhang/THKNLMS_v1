package com.nguyenhungkhang.DemoForTest.services;

import java.util.List;
import java.util.Optional;

import com.nguyenhungkhang.DemoForTest.model.SectionVideo;

public interface ISectionVideoService {
	List<SectionVideo> getAll();
	void save(SectionVideo sectionVideo);
	void delete(Long id);
	Optional<SectionVideo> findById(Long id);
}
