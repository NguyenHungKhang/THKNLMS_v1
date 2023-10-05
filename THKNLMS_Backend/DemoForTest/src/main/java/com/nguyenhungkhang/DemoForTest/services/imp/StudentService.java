package com.nguyenhungkhang.DemoForTest.services.imp;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.nguyenhungkhang.DemoForTest.model.Student;
import com.nguyenhungkhang.DemoForTest.repository.IStudentRepository;
import com.nguyenhungkhang.DemoForTest.services.IStudentService;

@Service
public class StudentService implements IStudentService {

	@Autowired
	private IStudentRepository studentRepository;
	
	@Override
	public List<Student> getAll() {
		return (List<Student>) studentRepository.findAll();
	}

	@Override
	public void save(Student student) {
		studentRepository.save(student);
	}

	@Override
	public void delete(Long id) {
		studentRepository.deleteById(id);
	}

	@Override
	public Optional<Student> findById(Long id) {
		return studentRepository.findById(id);
	}

}
