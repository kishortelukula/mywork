package com.CRUD.Test.Repositry;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.CRUD.Test.Entity.UserData;

@Repository
public interface UserDataRepo extends JpaRepository<UserData, Integer> {

}
