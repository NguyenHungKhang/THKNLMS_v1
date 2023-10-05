package com.nguyenhungkhang.DemoForTest.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.nguyenhungkhang.DemoForTest.model.Section;

public interface ISectionRepository extends JpaRepository<Section, Long> {

}
