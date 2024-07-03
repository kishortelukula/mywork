package com.CRUD;

import java.util.List;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import com.CRUD.Been.Been;
import com.CRUD.DAO.DAO;

@SpringBootApplication
public class CrudUsingJdbcTemplateApplication {

	public static DAO<Been>dao;
	
	public CrudUsingJdbcTemplateApplication(DAO<Been>dao) {
		this.dao=dao;
	}
	
	public static void main(String[] args) {
		SpringApplication.run(CrudUsingJdbcTemplateApplication.class, args);
	Been been=new Been(5, "F", "test1");
		
//		dao.create(been);
	dao.update(been, 5);
	System.out.println(dao.get(5));
	dao.delete(5);
	System.out.println(dao.getAll());
	}

}
