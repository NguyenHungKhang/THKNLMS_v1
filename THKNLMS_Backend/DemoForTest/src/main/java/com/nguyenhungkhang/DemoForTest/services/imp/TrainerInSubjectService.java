package com.nguyenhungkhang.DemoForTest.services.imp;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.nguyenhungkhang.DemoForTest.model.TrainerInSubject;
import com.nguyenhungkhang.DemoForTest.repository.ITrainerInSubjectRepository;
import com.nguyenhungkhang.DemoForTest.services.ITrainerInSubjectService;

@Service
public class TrainerInSubjectService implements ITrainerInSubjectService {

	@Autowired
	private ITrainerInSubjectRepository trainerInSubjectRepository;
	
	@Override
	public List<TrainerInSubject> getAll() {
		return (List<TrainerInSubject>) trainerInSubjectRepository.findAll();
	}

	@Override
	public void save(TrainerInSubject trainerInSubject) {
		trainerInSubjectRepository.save(trainerInSubject);
	}

	@Override
	public void delete(Long id) {
		trainerInSubjectRepository.deleteById(id);
	}

	@Override
	public Optional<TrainerInSubject> findById(Long id) {
		return trainerInSubjectRepository.findById(id);
	}

}
