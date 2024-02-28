package com.CRUD.DAO;

import java.util.List;
import java.util.Optional;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.stereotype.Component;

import com.CRUD.Been.Been;
@Component
public class JDBCDao implements DAO<Been>{
	
	private static final Logger log = LoggerFactory.getLogger(JDBCDao.class);
	
	@Autowired
	private JdbcTemplate jdbcTemplate;

	RowMapper<Been> rowMapper=(rs, rowNum) ->{ 
		Been b=new Been();
	b.setUserId(rs.getInt("user_id"));
	b.setGender(rs.getString("gender"));
	b.setUserName(rs.getString("user_name"));
	return b;
	};
	
	@Override
	public List<Been>getAll(){
		 String query="SELECT * FROM work.my_user";
				 
		return jdbcTemplate.query(query, (rs, rowNum) ->{ 
			Been b=new Been();
		b.setUserId(rs.getInt("user_id"));
		b.setGender(rs.getString("gender"));
		b.setUserName(rs.getString("user_name"));
		return b;
		});
	}
	@Override
	public void create(Been been) {
		String query="insert work.my_user(user_id,gender,user_name) values(?,?,?)";
		
		int excuatedCount=jdbcTemplate.update(query,been.getUserId(),been.getGender(),been.getUserName());
		if(excuatedCount !=0) {
		
			log.info("Record inserted with ID: "+been.getUserId());
		}
	
	}
	@Override
	public Optional<Been> get(int userId){
		String query="select * from work.my_user where user_id=?";
		
		Been been=null;
		been=jdbcTemplate.queryForObject(query, new Object[] {userId},rowMapper);
			
		return Optional.ofNullable(been);
	}
	
	@Override
	public void update(Been been, int userId) {
		String query="update work.my_user set gender=?,user_name=? where user_id=? ";
		
		int updateCount=jdbcTemplate.update(query, been.getGender(),been.getUserName(),userId);
	if(updateCount !=0) {
		
		log.info("Query is upadted with ID :"+userId);
	}	
	
	}
	@Override
	public void delete(int userId) {
		
		String query="delete from work.my_user where user_id=? ";
		
		int deletedCount=jdbcTemplate.update(query,userId);
		if(deletedCount !=0) {
		log.info("Record is deleted with ID :"+userId);	
		
		}
	} 
	

}
