package com.nguyenhungkhang.DemoForTest.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.nguyenhungkhang.DemoForTest.model.Trainer;

public interface ITrainerRepository extends JpaRepository<Trainer, Long> {

}
