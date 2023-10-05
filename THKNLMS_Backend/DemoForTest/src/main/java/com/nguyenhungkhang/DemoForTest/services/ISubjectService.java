package com.nguyenhungkhang.DemoForTest.services;

import java.util.List;
import java.util.Optional;

import com.nguyenhungkhang.DemoForTest.model.Subject;

public interface ISubjectService {
	List<Subject> getAll();
	void save(Subject subject);
	void delete(Long id);
	Optional<Subject> findById(Long id);
}
