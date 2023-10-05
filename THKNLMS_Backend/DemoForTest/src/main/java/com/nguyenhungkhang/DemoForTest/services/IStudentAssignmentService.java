package com.nguyenhungkhang.DemoForTest.services;

import java.util.List;
import java.util.Optional;

import com.nguyenhungkhang.DemoForTest.model.StudentAssignment;

public interface IStudentAssignmentService {
	List<StudentAssignment> getAll();
	void save(StudentAssignment studentAssignment);
	void delete(Long id);
	Optional<StudentAssignment> findById(Long id);
}
