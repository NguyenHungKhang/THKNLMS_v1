package com.nguyenhungkhang.DemoForTest.services.imp;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.nguyenhungkhang.DemoForTest.model.SectionVideo;
import com.nguyenhungkhang.DemoForTest.repository.ISectionVideoRepository;
import com.nguyenhungkhang.DemoForTest.services.ISectionVideoService;

@Service
public class SectionVideoService implements ISectionVideoService {

	@Autowired
	private ISectionVideoRepository sectionFileAnswerRepository;
	
	@Override
	public List<SectionVideo> getAll() {
		return (List<SectionVideo>) sectionFileAnswerRepository.findAll();
	}

	@Override
	public void save(SectionVideo sectionFileAnswer) {
		sectionFileAnswerRepository.save(sectionFileAnswer);
	}

	@Override
	public void delete(Long id) {
		sectionFileAnswerRepository.deleteById(id);
	}

	@Override
	public Optional<SectionVideo> findById(Long id) {
		return sectionFileAnswerRepository.findById(id);
	}

}
