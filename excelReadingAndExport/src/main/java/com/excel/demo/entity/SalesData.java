package com.excel.demo.entity;

import java.sql.Date;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;




@Entity

public class SalesData {
	
	
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	public Long id;
	public String orderDate;
	public String region;
	public String manager;
	public String salesMan;
	public String item;
	public String unit;
	public String unitPrice;
	public String saleAmount;
	public SalesData() {
		
	}
	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}
	public String getOrderDate() {
		return orderDate;
	}
	public void setOrderDate(String orderDate) {
		this.orderDate = orderDate;
	}
	public String getRegion() {
		return region;
	}
	public void setRegion(String region) {
		this.region = region;
	}
	public String getManager() {
		return manager;
	}
	public void setManager(String manager) {
		this.manager = manager;
	}
	public String getSalesMan() {
		return salesMan;
	}
	public void setSalesMan(String salesMan) {
		this.salesMan = salesMan;
	}
	public String getItem() {
		return item;
	}
	public void setItem(String item) {
		this.item = item;
	}
	public String getUnit() {
		return unit;
	}
	public void setUnit(String unit) {
		this.unit = unit;
	}
	public String getUnitPrice() {
		return unitPrice;
	}
	public void setUnitPrice(String unitPrice) {
		this.unitPrice = unitPrice;
	}
	public String getSaleAmount() {
		return saleAmount;
	}
	public void setSaleAmount(String saleAmount) {
		this.saleAmount = saleAmount;
	}
	public SalesData(Long id, String orderDate, String region, String manager, String salesMan, String item, String unit,
			String unitPrice, String saleAmount) {
		super();
		this.id = id;
		this.orderDate = orderDate;
		this.region = region;
		this.manager = manager;
		this.salesMan = salesMan;
		this.item = item;
		this.unit = unit;
		this.unitPrice = unitPrice;
		this.saleAmount = saleAmount;
	}
	
	
	
	

}
