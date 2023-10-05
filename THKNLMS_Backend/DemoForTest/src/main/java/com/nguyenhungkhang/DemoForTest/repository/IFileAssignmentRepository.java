package com.nguyenhungkhang.DemoForTest.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.nguyenhungkhang.DemoForTest.model.FileAssignment;

public interface IFileAssignmentRepository extends JpaRepository<FileAssignment, Long> {

}
