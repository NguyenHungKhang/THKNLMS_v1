package com.nguyenhungkhang.DemoForTest.services.imp;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.nguyenhungkhang.DemoForTest.model.StudentInSubject;
import com.nguyenhungkhang.DemoForTest.repository.IStudentInSubjectRepository;
import com.nguyenhungkhang.DemoForTest.services.IStudentInSubjectService;

@Service
public class StudentInSubjectService implements IStudentInSubjectService {

	@Autowired
	private IStudentInSubjectRepository studentInSubjectRepository;
	
	@Override
	public List<StudentInSubject> getAll() {
		return (List<StudentInSubject>) studentInSubjectRepository.findAll();
	}

	@Override
	public void save(StudentInSubject studentInSubject) {
		studentInSubjectRepository.save(studentInSubject);
	}

	@Override
	public void delete(Long id) {
		studentInSubjectRepository.deleteById(id);
	}

	@Override
	public Optional<StudentInSubject> findById(Long id) {
		return studentInSubjectRepository.findById(id);
	}

}
