package com.test.demo.Entity;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;


@Entity
public class myUser {

	@Id
	private int user_id;
	private String user_name;
	private String gender;
	
	public myUser() {
		
	}

	public myUser(int user_id, String user_name, String gender) {
		super();
		this.user_id = user_id;
		this.user_name = user_name;
		this.gender = gender;
	}

	public int getUser_id() {
		return user_id;
	}

	public void setUser_id(int user_id) {
		this.user_id = user_id;
	}

	public String getUser_name() {
		return user_name;
	}

	public void setUser_name(String user_name) {
		this.user_name = user_name;
	}

	public String getGender() {
		return gender;
	}

	public void setGender(String gender) {
		this.gender = gender;
	}

	@Override
	public String toString() {
		return "myUser [user_id=" + user_id + ", user_name=" + user_name + ", gender=" + gender + "]";
	}
	
	
	
	
	
}
