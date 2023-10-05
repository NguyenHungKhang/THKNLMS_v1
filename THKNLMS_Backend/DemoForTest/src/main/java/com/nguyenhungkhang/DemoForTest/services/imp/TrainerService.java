package com.nguyenhungkhang.DemoForTest.services.imp;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.nguyenhungkhang.DemoForTest.model.Trainer;
import com.nguyenhungkhang.DemoForTest.repository.ITrainerRepository;
import com.nguyenhungkhang.DemoForTest.services.ITrainerService;

@Service
public class TrainerService implements ITrainerService {

	@Autowired
	private ITrainerRepository trainerRepository;
	
	@Override
	public List<Trainer> getAll() {
		return (List<Trainer>) trainerRepository.findAll();
	}

	@Override
	public void save(Trainer trainer) {
		trainerRepository.save(trainer);
	}

	@Override
	public void delete(Long id) {
		trainerRepository.deleteById(id);
	}

	@Override
	public Optional<Trainer> findById(Long id) {
		return trainerRepository.findById(id);
	}

}
