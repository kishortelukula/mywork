package com.CRUD.Test.Service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


import com.CRUD.Test.Entity.UserData;
import com.CRUD.Test.Repositry.UserDataRepo;

@Service
public class UserDataService {

	@Autowired
	UserDataRepo repo;
	
	public UserData insertData(UserData userData) {
		
		
		 try {
	            return repo.save(userData);
	        } catch (Exception e) {
	            // Log the exception instead of printing to console
	            // logger.error("Error saving UserData: " + e.getMessage());
	            throw new RuntimeException("Error saving UserData", e);
	        }
	}
	
	
	public List<UserData>getall(){
		
		try {
		List<UserData>list=	repo.findAll();
			
			return list;
		} catch (Exception e) {
			// TODO: handle exception
			 throw new RuntimeException("Error getting UserData", e);
		}
		
	}
	
	public UserData update(UserData data) {
				
		try {
			
			return repo.save(data);
		} catch (Exception e) {
			 throw new RuntimeException("Error updating UserData", e);
		}
	}
	
	public String delete (Integer id) {
		
		try {
			
			repo.deleteById(id);
			return "deleted";
		} catch (Exception e) {
			// TODO: handle exception
			throw new RuntimeException("Error deleting UserData", e);
		}
	}
	
	public Optional<UserData> findData(Integer id) {
		
		
		try {
			
			Optional<UserData> data=repo.findById(id);
			return data;
		} catch (Exception e) {
			// TODO: handle exception
			throw new RuntimeException("Error deleting UserData", e);
		}
		
	}
	
}
