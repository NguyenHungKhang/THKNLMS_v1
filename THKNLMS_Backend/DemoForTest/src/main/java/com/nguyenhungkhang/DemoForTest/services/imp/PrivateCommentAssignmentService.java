package com.nguyenhungkhang.DemoForTest.services.imp;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.nguyenhungkhang.DemoForTest.model.PrivateCommentAssignment;
import com.nguyenhungkhang.DemoForTest.repository.IPrivateCommentAssignmentRepository;
import com.nguyenhungkhang.DemoForTest.services.IPrivateCommentAssignmentService;

@Service
public class PrivateCommentAssignmentService implements IPrivateCommentAssignmentService {

	@Autowired
	private IPrivateCommentAssignmentRepository privateCommentAssignmentRepository;
	
	@Override
	public List<PrivateCommentAssignment> getAll() {
		return (List<PrivateCommentAssignment>) privateCommentAssignmentRepository.findAll();
	}

	@Override
	public void save(PrivateCommentAssignment privateCommentAssignment) {
		privateCommentAssignmentRepository.save(privateCommentAssignment);
	}

	@Override
	public void delete(Long id) {
		privateCommentAssignmentRepository.deleteById(id);
	}

	@Override
	public Optional<PrivateCommentAssignment> findById(Long id) {
		return privateCommentAssignmentRepository.findById(id);
	}

}
