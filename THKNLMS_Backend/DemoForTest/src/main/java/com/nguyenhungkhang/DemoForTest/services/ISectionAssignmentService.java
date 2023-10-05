package com.nguyenhungkhang.DemoForTest.services;

import java.util.List;
import java.util.Optional;

import com.nguyenhungkhang.DemoForTest.model.SectionAssignment;

public interface ISectionAssignmentService {
	List<SectionAssignment> getAll();
	void save(SectionAssignment sectionAssignment);
	void delete(Long id);
	Optional<SectionAssignment> findById(Long id);
}
