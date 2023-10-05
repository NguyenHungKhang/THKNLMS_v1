package com.nguyenhungkhang.DemoForTest.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.nguyenhungkhang.DemoForTest.model.PostFile;

public interface IPostFileRepository extends JpaRepository<PostFile, Long> {

}
