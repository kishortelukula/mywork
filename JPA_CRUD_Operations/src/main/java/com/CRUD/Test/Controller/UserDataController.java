package com.CRUD.Test.Controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.security.SecurityProperties.User;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;


import com.CRUD.Test.Entity.UserData;
import com.CRUD.Test.Service.UserDataService;

@RestController
public class UserDataController {

	@Autowired
	UserDataService dataService;
	
	
	@PostMapping("/add")
	public ResponseEntity<UserData> insert(@RequestBody UserData userData){
		
		UserData data=dataService.insertData(userData);
		
		return new ResponseEntity<>(data,HttpStatus.CREATED);
	}

	@GetMapping("/all")
	public ResponseEntity<List<UserData>>findAll()
	{
		List<UserData> list=dataService.getall();
		
		return new ResponseEntity<List<UserData>>(list,HttpStatus.OK);
	}
	
	@PutMapping("/edit")
	public ResponseEntity<UserData>update(@RequestBody UserData data){
		
		UserData userData=dataService.update(data);
		
		return new ResponseEntity<UserData>(userData,HttpStatus.OK);
	}
	
	@DeleteMapping("/delete/{id}")
	public String delete(@PathVariable Integer id){
		String a=dataService.delete(id);
		
		return a;
	}
	
	@GetMapping("/getby/{id}")
	public UserData getById(@PathVariable Integer id){
		Optional<UserData> data=dataService.findData(id);
		UserData data2=data.get();
		return data2;
		}
	
}
