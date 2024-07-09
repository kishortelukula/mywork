package com.excel.demo.reposit;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.excel.demo.entity.SalesData;

@Repository
public interface SalesDataReposit extends JpaRepository<SalesData, Long>{

}
