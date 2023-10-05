package com.nguyenhungkhang.DemoForTest.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.nguyenhungkhang.DemoForTest.model.Course;
import com.nguyenhungkhang.DemoForTest.services.ICourseService;
import com.nguyenhungkhang.DemoForTest.services.IUserService;
import com.nguyenhungkhang.DemoForTest.services.imp.CourseService;
import com.nguyenhungkhang.DemoForTest.services.imp.UserService;

import jakarta.servlet.http.HttpServletResponse;

@RestController
@RequestMapping("/course")
public class CourseController {
	@Autowired
	IUserService userService = new UserService();
	
	@Autowired
	ICourseService courseService = new CourseService();
	
	@GetMapping("/")
	public ResponseEntity getOwnedCourse(@RequestBody Long ownerId, HttpServletResponse response) {
		List<Course> courses = courseService.getOwnedCourse(ownerId);
		return ResponseEntity.ok().body(courses);
	}
	
	@GetMapping("/{id}")
	public ResponseEntity findById(@PathVariable(value="id") Long id, HttpServletResponse response) {
		Optional<Course> courses = courseService.findById(id)
				.map(Optional::of)
	            .orElseGet(null);
		return ResponseEntity.ok().body(courses);
	}
}
