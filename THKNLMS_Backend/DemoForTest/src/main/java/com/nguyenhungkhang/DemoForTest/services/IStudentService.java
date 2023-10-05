package com.nguyenhungkhang.DemoForTest.services;

import java.util.List;
import java.util.Optional;

import com.nguyenhungkhang.DemoForTest.model.Student;

public interface IStudentService {
	List<Student> getAll();
	void save(Student student);
	void delete(Long id);
	Optional<Student> findById(Long id);
}
