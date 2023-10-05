package com.nguyenhungkhang.DemoForTest.controller;

import java.util.Comparator;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.fasterxml.jackson.databind.node.ObjectNode;
import com.nguyenhungkhang.DemoForTest.model.Post;
import com.nguyenhungkhang.DemoForTest.services.ICourseService;
import com.nguyenhungkhang.DemoForTest.services.IPostService;
import com.nguyenhungkhang.DemoForTest.services.IUserService;
import com.nguyenhungkhang.DemoForTest.services.imp.CourseService;
import com.nguyenhungkhang.DemoForTest.services.imp.PostService;
import com.nguyenhungkhang.DemoForTest.services.imp.UserService;

@RestController
@RequestMapping("/post")
public class PostController {
	
	@Autowired
	IPostService postService = new PostService();
	
	@Autowired
	IUserService userService = new UserService();
	
	@Autowired
	ICourseService courseService = new CourseService();
	
	@PostMapping("/add")
    public void save(@RequestBody ObjectNode json) {
        Post post = new Post();
        post.setContent(json.get("content").asText());
        post.setOwner(userService.findById(json.get("ownerId").asLong()).isPresent() ? userService.findById(json.get("ownerId").asLong()).get() : null);
        post.setCourse(courseService.findById(json.get("courseId").asLong()).isPresent() ? courseService.findById(json.get("courseId").asLong()).get() : null);       
        postService.save(post);
	}
	
	@GetMapping("/course/{id}")
    public ResponseEntity<List<Post>> getAll(@PathVariable(value="id") Long id) {
		return ResponseEntity.ok().body(postService.getAll());
	}
	
	@DeleteMapping("/delete/{id}")
	public void delete(@PathVariable(value="id") Long id) {
		postService.delete(id);
	}
	
	@PutMapping("/update/{id}")
	public void update(@PathVariable(value="id") Long id, @RequestBody ObjectNode json) {
		Optional<Post> existPost = postService.findById(id)
				.map(Optional::of)
	            .orElseGet(null);
		if(existPost.isPresent()) {
			Post post = existPost.get();
			post.setContent(json.get("content").asText());
			postService.save(post);
		}
	}
	
}
