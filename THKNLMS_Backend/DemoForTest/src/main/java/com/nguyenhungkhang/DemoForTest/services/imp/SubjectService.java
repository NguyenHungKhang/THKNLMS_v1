package com.nguyenhungkhang.DemoForTest.services.imp;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.nguyenhungkhang.DemoForTest.model.Subject;
import com.nguyenhungkhang.DemoForTest.repository.ISubjectRepository;
import com.nguyenhungkhang.DemoForTest.services.ISubjectService;

@Service
public class SubjectService implements ISubjectService {

	@Autowired
	private ISubjectRepository subjectRepository;
	
	@Override
	public List<Subject> getAll() {
		return (List<Subject>) subjectRepository.findAll();
	}

	@Override
	public void save(Subject subject) {
		subjectRepository.save(subject);
	}

	@Override
	public void delete(Long id) {
		subjectRepository.deleteById(id);
	}

	@Override
	public Optional<Subject> findById(Long id) {
		return subjectRepository.findById(id);
	}

}
