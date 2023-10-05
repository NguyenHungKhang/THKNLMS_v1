package com.nguyenhungkhang.DemoForTest.services.imp;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.nguyenhungkhang.DemoForTest.model.Section;
import com.nguyenhungkhang.DemoForTest.repository.ISectionRepository;
import com.nguyenhungkhang.DemoForTest.services.ISectionService;

@Service
public class SectionService implements ISectionService {

	@Autowired
	private ISectionRepository sectionRepository;
	
	@Override
	public List<Section> getAll() {
		return (List<Section>) sectionRepository.findAll();
	}

	@Override
	public void save(Section section) {
		sectionRepository.save(section);
	}

	@Override
	public void delete(Long id) {
		sectionRepository.deleteById(id);
	}

	@Override
	public Optional<Section> findById(Long id) {
		return sectionRepository.findById(id);
	}

}
