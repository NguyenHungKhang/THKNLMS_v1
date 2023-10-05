package com.nguyenhungkhang.DemoForTest.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.nguyenhungkhang.DemoForTest.model.Course;

@Repository
public interface ICourseRepository extends JpaRepository<Course, Long> {
	@Query(nativeQuery = true, value = "SELECT * FROM course c WHERE c.ownerid = ?1")
	List<Course> findByOwnerId(Long ownerId);
	
}
