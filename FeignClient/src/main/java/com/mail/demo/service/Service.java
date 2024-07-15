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
		
		for(UserData data:userData1) {
			System.out.println("User Id:"+data.getUserId() +"\n"+ "User Name:"+data.getUserName()+"\n"+"User Email:"+data.getUserEmail()+"\n"+"User Phone No:"+data.getUserPhoneNumber()+"\n\n");
			
		}

	}
}
