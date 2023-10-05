package com.nguyenhungkhang.DemoForTest.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.nguyenhungkhang.DemoForTest.model.PostSection;

public interface IPostSectionRepository extends JpaRepository<PostSection, Long> {

}
