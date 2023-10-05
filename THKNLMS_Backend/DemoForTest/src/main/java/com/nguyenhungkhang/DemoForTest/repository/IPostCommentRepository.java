package com.nguyenhungkhang.DemoForTest.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.nguyenhungkhang.DemoForTest.model.PostComment;

public interface IPostCommentRepository extends JpaRepository<PostComment, Long> {

}
