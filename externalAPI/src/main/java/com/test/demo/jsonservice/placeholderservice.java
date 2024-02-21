package com.test.demo.jsonservice;

import java.util.List;

import org.springframework.core.ParameterizedTypeReference;
import org.springframework.http.HttpMethod;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import com.test.demo.model.posts;
@Service
public class placeholderservice {
	
	private String api_url="https://jsonplaceholder.typicode.com/posts";
	
	public RestTemplate restTemplate;
	
	

	
	public placeholderservice(RestTemplate restTemplate) {
	this.restTemplate=restTemplate;
		
	}




	public List<posts>getPosts(){
		ResponseEntity<List<posts>>exchange=restTemplate.exchange(api_url, HttpMethod.GET, null, new ParameterizedTypeReference<List<posts>>() {});
		
		return exchange.getBody();
	}

}
