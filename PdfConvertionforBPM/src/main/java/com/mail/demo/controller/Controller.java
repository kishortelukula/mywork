package com.mail.demo.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.mail.demo.service.Service;

@RestController
public class Controller {
	@Autowired
	Service service;
	
	@PostMapping("/Convert")
	public String convertPdf(@RequestBody String htmlData) {
		
		return service.convertHTMLToPDF(htmlData);
	}

}
