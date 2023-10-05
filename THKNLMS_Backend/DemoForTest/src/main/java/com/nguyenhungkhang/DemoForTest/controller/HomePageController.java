package com.nguyenhungkhang.DemoForTest.controller;

import java.security.Principal;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.nguyenhungkhang.DemoForTest.model.Post;
import com.nguyenhungkhang.DemoForTest.model.User;
import com.nguyenhungkhang.DemoForTest.services.IPostCommentService;
import com.nguyenhungkhang.DemoForTest.services.IPostService;
import com.nguyenhungkhang.DemoForTest.services.ITrainerService;
import com.nguyenhungkhang.DemoForTest.services.IUserService;
import com.nguyenhungkhang.DemoForTest.services.imp.PostCommentService;
import com.nguyenhungkhang.DemoForTest.services.imp.PostService;
import com.nguyenhungkhang.DemoForTest.services.imp.TrainerService;
import com.nguyenhungkhang.DemoForTest.services.imp.UserService;

@RestController
@RequestMapping("/v1/oauth")
public class HomePageController {
	
	@Autowired
	IUserService userService = new UserService();
	
	@Autowired
	IPostService postService = new PostService();
	
	@Autowired
	ITrainerService trainerService = new TrainerService();
	
	@Autowired
	IPostCommentService postCommentService = new PostCommentService();
	
	@GetMapping("/user/info")
    public ResponseEntity getUserInfo(Principal principal) { 
        Optional<User> user = userService.findById(Long.valueOf(principal.getName()))
        		.map(Optional::of)
	            .orElseGet(null);
            
        return ResponseEntity.ok().body(user);
    }
	
	@GetMapping("/user/{id}")
	public ResponseEntity getById(Principal principal) {
        Optional<User> user = userService.findById(Long.valueOf(principal.getName()))
        		.map(Optional::of)
	            .orElseGet(null);
        
        return ResponseEntity.ok().body(user);
    }
	
	@GetMapping("/course/post")
	public ResponseEntity getCoursePost(Principal principal) {
        List<Post> posts = postService.getAll();
        return ResponseEntity.ok().body(posts);
    }
}
