package com.test.demo.Reposit;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.test.demo.Entity.myUser;

@Repository
public interface userRepo extends JpaRepository<myUser, Integer> {

}
