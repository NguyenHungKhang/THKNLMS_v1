package com.nguyenhungkhang.DemoForTest.services.imp;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.nguyenhungkhang.DemoForTest.model.Teacher;
import com.nguyenhungkhang.DemoForTest.repository.ITeacherRepository;
import com.nguyenhungkhang.DemoForTest.services.ITeacherService;

@Service
public class TeacherService implements ITeacherService{

	@Autowired
	private ITeacherRepository teacherRepository;
	
	@Override
	public List<Teacher> getAll() {
		return (List<Teacher>) teacherRepository.findAll();
	}

	@Override
	public void save(Teacher teacher) {
		teacherRepository.save(teacher);
	}

	@Override
	public void delete(Long id) {
		teacherRepository.deleteById(id);
	}

	@Override
	public Optional<Teacher> findById(Long id) {
		return teacherRepository.findById(id);
	}

}
