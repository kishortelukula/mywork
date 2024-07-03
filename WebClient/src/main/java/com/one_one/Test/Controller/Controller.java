package com.one_one.Test.Controller;


import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;


import com.one_one.Test.Services.MyService;

import reactor.core.publisher.Mono;



@RestController
public class Controller {
	
	
	@Autowired
	MyService myService;
	
	@GetMapping("/CallOther")
	public String getcall() {
		
//		String a=builder.build().get().uri("http://localhost:8080/all").retrieve().bodyToMono(String.class).block();
		String a=myService.ExcuateCall();
		return a;
	}
	
	@PostMapping("/InsertOther")
	public Mono<String>insertCall(@RequestBody Map<String, Object> data){
		
		return myService.InsertDataintoRest(data);
	}
}
