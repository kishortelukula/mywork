package com.mail.demo.dao;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class UserData {
	private Integer userId;
	private String userName;
	private String userEmail;
	private String userPhoneNumber;

}
