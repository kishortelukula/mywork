package com.mail.demo.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.mail.demo.service.Service;

@RestController
public class Controller {

	@Autowired
	Service service;
	
	@GetMapping("/")
	public void testGet() {
		service.getCall();
		
	}
	
}
