package com.nguyenhungkhang.DemoForTest.services;

import java.util.List;
import java.util.Optional;

import com.nguyenhungkhang.DemoForTest.model.PrivateCommentAssignment;

public interface IPrivateCommentAssignmentService {
	List<PrivateCommentAssignment> getAll();
	void save(PrivateCommentAssignment privateCommentAssignment);
	void delete(Long id);
	Optional<PrivateCommentAssignment> findById(Long id);
}
