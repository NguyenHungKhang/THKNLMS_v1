package com.nguyenhungkhang.DemoForTest.services.imp;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.nguyenhungkhang.DemoForTest.model.SectionContent;
import com.nguyenhungkhang.DemoForTest.repository.ISectionContentRepository;
import com.nguyenhungkhang.DemoForTest.services.ISectionContentService;

@Service
public class SectionContentService implements ISectionContentService {

	@Autowired
	private ISectionContentRepository sectionContentRepository;
	
	@Override
	public List<SectionContent> getAll() {
		return (List<SectionContent>) sectionContentRepository.findAll();
	}

	@Override
	public void save(SectionContent sectionContent) {
		sectionContentRepository.save(sectionContent);
	}

	@Override
	public void delete(Long id) {
		sectionContentRepository.deleteById(id);
	}

	@Override
	public Optional<SectionContent> findById() {
		return sectionContentRepository.findById(null);
	}

}
