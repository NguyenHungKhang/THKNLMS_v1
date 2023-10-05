package com.nguyenhungkhang.DemoForTest.services.imp;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.nguyenhungkhang.DemoForTest.model.SectionAssignment;
import com.nguyenhungkhang.DemoForTest.repository.ISectionAssignmentRepository;
import com.nguyenhungkhang.DemoForTest.services.ISectionAssignmentService;

@Service
public class SectionAssignmentService implements ISectionAssignmentService {

	@Autowired
	private ISectionAssignmentRepository sectionAssignmentRepository;
	
	@Override
	public List<SectionAssignment> getAll() {
		return (List<SectionAssignment>) sectionAssignmentRepository.findAll();
	}

	@Override
	public void save(SectionAssignment sectionAssignment) {
		sectionAssignmentRepository.save(sectionAssignment);
	}

	@Override
	public void delete(Long id) {
		sectionAssignmentRepository.deleteById(id);
	}

	@Override
	public Optional<SectionAssignment> findById(Long id) {
		return sectionAssignmentRepository.findById(id);
	}

}
