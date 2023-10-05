package com.nguyenhungkhang.DemoForTest.services;

import java.util.List;
import java.util.Optional;

import com.nguyenhungkhang.DemoForTest.model.TrainerInSubject;

public interface ITrainerInSubjectService {
	List<TrainerInSubject> getAll();
	void save(TrainerInSubject trainerInSubject);
	void delete(Long id);
	Optional<TrainerInSubject> findById(Long id);
}
