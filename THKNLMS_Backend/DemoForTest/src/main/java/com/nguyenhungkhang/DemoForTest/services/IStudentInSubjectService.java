package com.nguyenhungkhang.DemoForTest.services;

import java.util.List;
import java.util.Optional;

import com.nguyenhungkhang.DemoForTest.model.StudentInSubject;

public interface IStudentInSubjectService {
	List<StudentInSubject> getAll();
	void save(StudentInSubject studentInSubject);
	void delete(Long id);
	Optional<StudentInSubject> findById(Long id);
}
