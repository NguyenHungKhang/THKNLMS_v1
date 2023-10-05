package com.nguyenhungkhang.DemoForTest.services.imp;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.nguyenhungkhang.DemoForTest.model.Course;
import com.nguyenhungkhang.DemoForTest.repository.ICourseRepository;
import com.nguyenhungkhang.DemoForTest.services.ICourseService;

@Service
public class CourseService implements ICourseService {

	@Autowired
	private ICourseRepository courseRepository;
	
	@Override
	public List<Course> getAll() {
		return (List<Course>) courseRepository.findAll();
	}

	@Override
	public void save(Course course) {
		courseRepository.save(course);
	}

	@Override
	public void delete(Long id) {
		courseRepository.deleteById(id);
	}

	@Override
	public Optional<Course> findById(Long id) {
		return courseRepository.findById(id);
	}

	@Override
	public List<Course> getOwnedCourse(Long ownerId) {
		return courseRepository.findByOwnerId(ownerId);
	}
	
}
