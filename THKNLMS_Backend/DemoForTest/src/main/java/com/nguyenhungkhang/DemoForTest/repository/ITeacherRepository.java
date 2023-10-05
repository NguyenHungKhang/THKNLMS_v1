package com.nguyenhungkhang.DemoForTest.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.nguyenhungkhang.DemoForTest.model.Teacher;

public interface ITeacherRepository extends JpaRepository<Teacher, Long> {

}
