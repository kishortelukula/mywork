package com.mail.demo.Controller;

import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.mail.demo.Service.Service;

import jakarta.websocket.server.PathParam;

@RestController
public class Controller {
	
	@Autowired
Service service;
	
	@GetMapping("/Read")
	public void readMail() {
		
		service.readMail();
	}
	
	@PostMapping("/SentMail")
	public void sendMailNoAttachment(@RequestBody Map<String, String> rBody) {
	String to=rBody.get("to");
	String sub=rBody.get("sub");
	String body=rBody.get("body");
		
		
	service.sentMail(to, sub, body);
	
	}

}
