package com.nguyenhungkhang.DemoForTest.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.nguyenhungkhang.DemoForTest.model.StudentInSubject;

public interface IStudentInSubjectRepository extends JpaRepository<StudentInSubject, Long> {

}
