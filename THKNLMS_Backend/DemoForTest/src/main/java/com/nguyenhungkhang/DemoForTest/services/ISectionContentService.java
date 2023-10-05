package com.nguyenhungkhang.DemoForTest.services;

import java.util.List;
import java.util.Optional;

import com.nguyenhungkhang.DemoForTest.model.SectionContent;

public interface ISectionContentService {
	List<SectionContent> getAll();
	void save(SectionContent sectionContent);
	void delete(Long id);
	Optional<SectionContent> findById();
}
