package com.nguyenhungkhang.DemoForTest.services.imp;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.nguyenhungkhang.DemoForTest.model.SectionAssignmentText;
import com.nguyenhungkhang.DemoForTest.repository.ISectionAssignmentTextRepository;
import com.nguyenhungkhang.DemoForTest.services.ISectionAssignmentTextService;

@Service
public class SectionAssignmentTextService implements ISectionAssignmentTextService {

	@Autowired
	private ISectionAssignmentTextRepository sectionAssignmentTextRepository;
	
	@Override
	public List<SectionAssignmentText> getAll() {
		return (List<SectionAssignmentText>) sectionAssignmentTextRepository.findAll();
	}

	@Override
	public void save(SectionAssignmentText sectionAssignmentText) {
		sectionAssignmentTextRepository.save(sectionAssignmentText);
	}

	@Override
	public void delete(Long id) {
		sectionAssignmentTextRepository.deleteById(id);
	}

	@Override
	public Optional<SectionAssignmentText> findById(Long id) {
		return sectionAssignmentTextRepository.findById(id);
	}

}
