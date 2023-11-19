package com.example.demo.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.constant.Api;
import com.example.demo.dto.response.UserResponse;
import com.example.demo.model.User;
import com.example.demo.service.UserService;
import com.fasterxml.jackson.core.JsonProcessingException;

import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;

@CrossOrigin
@RestController
@RequestMapping(Api.USER)
@RequiredArgsConstructor
@Tag(name = "User")
public class UserController {
	
	@Autowired
	UserService userService;
	
	
	@GetMapping("/all")
    public ResponseEntity<List<UserResponse>> getAllUsers() {
        List<UserResponse> userList = userService.getAllUsers();
        return ResponseEntity.ok(userList);
    }

	@PostMapping("/post")
	public ResponseEntity<User> create(final @RequestBody User users){
		User createUser=userService.create(users);
		return ResponseEntity.ok(createUser);
	}
	
	@GetMapping("/get/{id}")
	public ResponseEntity<Optional<User>> read(final @PathVariable Long id){
		Optional<User> createdCandidate=userService.read(id);
		return ResponseEntity.ok(createdCandidate);
	}
	
	@PutMapping("/put")
	public ResponseEntity<User> update(final @RequestBody User user)throws  JsonProcessingException{
		final User updatedUser=userService.update(user);
		return ResponseEntity.ok(updatedUser);
	}
	
	@DeleteMapping("/delete/{id}")
	public void delete(final @PathVariable Long id) {
		userService.delete(id);
	}
}