package com.nguyenhungkhang.DemoForTest.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.nguyenhungkhang.DemoForTest.model.Student;

public interface IStudentRepository extends JpaRepository<Student, Long> {

}
