package com.mail.demo.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;

import com.mail.demo.dao.UserData;
import com.mail.demo.service.feign.FeignClient;

@org.springframework.stereotype.Service
public class Service {
	
	@Autowired
	FeignClient client;
	
	public void getCall() {
		List<UserData>userData1=client.datas();

		System.out.println("getting Data :"+userData1);

	}
}
