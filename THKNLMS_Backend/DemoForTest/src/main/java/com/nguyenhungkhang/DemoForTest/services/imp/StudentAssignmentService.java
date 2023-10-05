package com.nguyenhungkhang.DemoForTest.services.imp;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.nguyenhungkhang.DemoForTest.model.StudentAssignment;
import com.nguyenhungkhang.DemoForTest.repository.IStudentAssignmentRepository;
import com.nguyenhungkhang.DemoForTest.services.IStudentAssignmentService;

@Service
public class StudentAssignmentService implements IStudentAssignmentService {

	@Autowired
	private IStudentAssignmentRepository studentAssignmentRepository;
	
	@Override
	public List<StudentAssignment> getAll() {
		return (List<StudentAssignment>) studentAssignmentRepository.findAll();
	}

	@Override
	public void save(StudentAssignment studentAssignment) {
		studentAssignmentRepository.save(studentAssignment);
	}

	@Override
	public void delete(Long id) {
		studentAssignmentRepository.deleteById(id);
	}

	@Override
	public Optional<StudentAssignment> findById(Long id) {
		return studentAssignmentRepository.findById(id);
	}

}
