package com.one_one.Test.Controller;

import java.lang.reflect.Array;
import java.util.Arrays;
import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;

@RestController
public class Controller {
	
	
	@GetMapping("/call")
	public List<Object>getCall(){
		
		String test="http://localhost:8080/all";
		
		try {
			
			RestTemplate restTemplate= new RestTemplate();
			Object [] datalist=restTemplate.getForObject(test, Object[].class);
			
			return Arrays.asList(datalist);
		} catch (Exception e) {
			 throw new RuntimeException("Error saving UserData", e);
		}
		
	
	}

}
