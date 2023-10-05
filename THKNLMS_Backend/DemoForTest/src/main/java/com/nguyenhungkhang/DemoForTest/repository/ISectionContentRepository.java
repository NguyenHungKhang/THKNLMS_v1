package com.nguyenhungkhang.DemoForTest.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.nguyenhungkhang.DemoForTest.model.SectionContent;

public interface ISectionContentRepository extends JpaRepository<SectionContent, Long> {

}
