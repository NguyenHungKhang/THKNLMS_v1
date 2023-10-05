package com.nguyenhungkhang.DemoForTest.services;

import java.util.List;
import java.util.Optional;

import com.nguyenhungkhang.DemoForTest.model.FileAssignment;

public interface IFileAssignmentService {
	List<FileAssignment> getAll();
	void save(FileAssignment fileAssignment);
	void delete(Long id);
	Optional<FileAssignment> findById(Long id);
}
