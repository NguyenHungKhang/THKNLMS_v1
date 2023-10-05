package com.nguyenhungkhang.DemoForTest.services;

import java.util.List;
import java.util.Optional;

import com.nguyenhungkhang.DemoForTest.model.Teacher;

public interface ITeacherService {
	List<Teacher> getAll();
	void save(Teacher teacher);
	void delete(Long id);
	Optional<Teacher> findById(Long id);
}
