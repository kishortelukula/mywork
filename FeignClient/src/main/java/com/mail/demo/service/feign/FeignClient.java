package com.mail.demo.service.feign;

import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;

import com.mail.demo.dao.UserData;

@org.springframework.cloud.openfeign.FeignClient(name ="Service",url ="http://localhost:8080")
public interface FeignClient {
	
	@GetMapping("/all")
	public List<UserData> datas();
	

}
