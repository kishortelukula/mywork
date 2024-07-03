package com.CRUD.Been;

public class Been {
	
	public int userId;
	public String gender;
	public String userName;
	
	public Been() {
		
	}

	

	public Been(int userId, String gender, String userName) {
		super();
		this.userId = userId;
		this.gender = gender;
		this.userName = userName;
	}



	public int getUserId() {
		return userId;
	}

	public void setUserId(int userId) {
		this.userId = userId;
	}

	public String getGender() {
		return gender;
	}

	public void setGender(String gender) {
		this.gender = gender;
	}

	public String getUserName() {
		return userName;
	}

	public void setUserName(String userName) {
		this.userName = userName;
	}

	@Override
	public String toString() {
		return "Been [userId=" + userId + ", gender=" + gender + ", userName=" + userName + "]";
	}
	
	
	

}
