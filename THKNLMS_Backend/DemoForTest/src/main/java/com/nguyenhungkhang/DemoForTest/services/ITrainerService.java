package com.nguyenhungkhang.DemoForTest.services;

import java.util.List;
import java.util.Optional;

import com.nguyenhungkhang.DemoForTest.model.Trainer;

public interface ITrainerService {
	List<Trainer> getAll();
	void save(Trainer trainer);
	void delete(Long id);
	Optional<Trainer> findById(Long id);
}
