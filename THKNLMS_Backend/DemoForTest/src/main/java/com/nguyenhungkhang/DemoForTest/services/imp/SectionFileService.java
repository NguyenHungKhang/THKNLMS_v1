package com.nguyenhungkhang.DemoForTest.services.imp;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.nguyenhungkhang.DemoForTest.model.SectionFile;
import com.nguyenhungkhang.DemoForTest.repository.ISectionFileRepository;
import com.nguyenhungkhang.DemoForTest.services.ISectionFileService;

@Service
public class SectionFileService implements ISectionFileService {

	@Autowired
	private ISectionFileRepository sectionFileRepository;
	
	@Override
	public List<SectionFile> getAll() {
		return (List<SectionFile>) sectionFileRepository.findAll();
	}

	@Override
	public void save(SectionFile sectionFile) {
		sectionFileRepository.save(sectionFile);
	}

	@Override
	public void delete(Long id) {
		sectionFileRepository.deleteById(id);
	}

	@Override
	public Optional<SectionFile> findById(Long id) {
		return sectionFileRepository.findById(id);
	}

}
