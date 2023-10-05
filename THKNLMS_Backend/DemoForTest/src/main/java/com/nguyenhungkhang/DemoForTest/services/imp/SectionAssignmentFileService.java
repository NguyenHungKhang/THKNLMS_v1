package com.nguyenhungkhang.DemoForTest.services.imp;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.nguyenhungkhang.DemoForTest.model.SectionAssignmentFile;
import com.nguyenhungkhang.DemoForTest.repository.ISectionAssignmentFileRepository;
import com.nguyenhungkhang.DemoForTest.services.ISectionAssignmentFileService;

@Service
public class SectionAssignmentFileService implements ISectionAssignmentFileService {

	@Autowired
	private ISectionAssignmentFileRepository sectionAssignmentFileRepository;
	
	@Override
	public List<SectionAssignmentFile> getAll() {
		return (List<SectionAssignmentFile>) sectionAssignmentFileRepository.findAll();
	}

	@Override
	public void save(SectionAssignmentFile sectionAssignmentFile) {
		sectionAssignmentFileRepository.save(sectionAssignmentFile);
	}

	@Override
	public void delete(Long id) {
		sectionAssignmentFileRepository.deleteById(id);
	}

	@Override
	public Optional<SectionAssignmentFile> findById(Long id) {
		return sectionAssignmentFileRepository.findById(id);
	}
	
}
