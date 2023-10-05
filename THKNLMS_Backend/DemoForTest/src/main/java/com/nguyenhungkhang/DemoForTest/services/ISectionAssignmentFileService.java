package com.nguyenhungkhang.DemoForTest.services;

import java.util.List;
import java.util.Optional;

import com.nguyenhungkhang.DemoForTest.model.SectionAssignmentFile;

public interface ISectionAssignmentFileService {
	List<SectionAssignmentFile> getAll();
	void save(SectionAssignmentFile sectionAssignmentFile);
	void delete(Long id);
	Optional<SectionAssignmentFile> findById(Long id);
}
