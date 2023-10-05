package com.nguyenhungkhang.DemoForTest.services;

import java.util.List;
import java.util.Optional;

import com.nguyenhungkhang.DemoForTest.model.SectionAssignmentText;

public interface ISectionAssignmentTextService {
	List<SectionAssignmentText> getAll();
	void save(SectionAssignmentText sectionAssignmentText);
	void delete(Long id);
	Optional<SectionAssignmentText> findById(Long id);
}
