package com.one_one.Test.Services;

import java.util.Map;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.web.reactive.function.BodyInserters;
import org.springframework.web.reactive.function.client.WebClient;

import reactor.core.publisher.Mono;



@Service
public class MyService {

	@Autowired
	WebClient.Builder builder;
	
	private static final Logger log = LoggerFactory.getLogger(MyService.class);

	
	@Value("${myapp.rest.GetAll.url}")  
	String getUrl;
	public String ExcuateCall () {
		
		String data= builder.build().get().uri(getUrl).retrieve().bodyToMono(String.class).block();
		log.info("Data is"+data);
		System.out.println("Data is"+data);
		return data;
	}
	
	@Value("${myapp.rest.addData.url}")
	String postUrl;
	
	public Mono<String>InsertDataintoRest(Map<String, Object> requestData){
		
		return builder.build()
				.post()
				.uri(postUrl)
				.body(BodyInserters.fromValue(requestData))
				.retrieve()
				.bodyToMono(String.class);
	}
 }
