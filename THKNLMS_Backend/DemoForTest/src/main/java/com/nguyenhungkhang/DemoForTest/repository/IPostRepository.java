package com.nguyenhungkhang.DemoForTest.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import com.nguyenhungkhang.DemoForTest.model.Post;

@Repository
public interface IPostRepository extends JpaRepository<Post, Long> {
	@Modifying
	@Query(nativeQuery = true, value = "INSERT INTO post(content, ownerid, courseid) VALUES (?1, ?2, ?3)")
	@Transactional
	void savePost (String content, Long ownerid, Long courseid);
}
