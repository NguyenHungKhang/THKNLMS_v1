package com.nguyenhungkhang.DemoForTest.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.nguyenhungkhang.DemoForTest.model.StudentAssignment;

public interface IStudentAssignmentRepository extends JpaRepository<StudentAssignment, Long> {

}
