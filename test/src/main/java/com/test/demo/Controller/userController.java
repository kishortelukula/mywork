package com.test.demo.Controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.test.demo.Entity.myUser;
import com.test.demo.Reposit.userRepo;

@RestController
@CrossOrigin("http://localhost:3000")
public class userController {
	
	@Autowired
	userRepo repo;
	@PostMapping("/insert")
	public myUser insert(@RequestBody myUser user) {
		
		repo.save(user);
		return user;
	}
	
	@GetMapping("selectbyid/{id}")
	public myUser selectedUser(@PathVariable int id){
		Optional<myUser> user=repo.findById(id);
		myUser selectdat=user.get();
		return selectdat;
		
	}
		
	@GetMapping("/findall")
	public List<myUser> getAll(){
		List<myUser> userList= repo.findAll();
		return userList;
	}
	@DeleteMapping("/deletbyid/{id}")
	public String deletebyid(@PathVariable int id) {
		 myUser user=repo.findById(id).get();
		if(user !=null) {
			repo.deleteById(id);
		}
		return "Deleted";
	}

	@PutMapping("/update")
	public myUser update(@RequestBody myUser user) {
	repo.save(user);
	return user;
	}

}
