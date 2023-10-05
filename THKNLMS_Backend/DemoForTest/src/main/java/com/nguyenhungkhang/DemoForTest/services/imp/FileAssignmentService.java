package com.nguyenhungkhang.DemoForTest.services.imp;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.nguyenhungkhang.DemoForTest.model.FileAssignment;
import com.nguyenhungkhang.DemoForTest.repository.IFileAssignmentRepository;
import com.nguyenhungkhang.DemoForTest.services.IFileAssignmentService;

@Service
public class FileAssignmentService implements IFileAssignmentService {
	@Autowired
	private IFileAssignmentRepository fileAssignmentRepository;
	
	@Override
	public List<FileAssignment> getAll() {
		return (List<FileAssignment>) fileAssignmentRepository.findAll();	
	}

	@Override
	public void save(FileAssignment fileAssignment) {
		fileAssignmentRepository.save(fileAssignment);
	}

	@Override
	public void delete(Long id) {
		fileAssignmentRepository.deleteById(id);
	}

	@Override
	public Optional<FileAssignment> findById(Long id) {
		return fileAssignmentRepository.findById(id);
	}

}
