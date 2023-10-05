package com.nguyenhungkhang.DemoForTest.services;

import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;

import com.nguyenhungkhang.DemoForTest.model.Course;

@Service
public interface ICourseService {
	List<Course> getAll();
	List<Course> getOwnedCourse(Long ownerId);
	void save(Course course);
	void delete(Long id);
	Optional<Course> findById(Long id);
}
