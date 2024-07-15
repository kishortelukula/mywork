package com.excel.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.excel.demo.service.SalesDataService;

import jakarta.servlet.http.HttpServletResponse;

@RestController
public class Controller {

	@Autowired
	SalesDataService dataService;

	@PostMapping("/Upload")
	public ResponseEntity<List<List<String>>> upload(@RequestParam("file") MultipartFile file) {
		dataService.readAndStoreData(file);
		return new ResponseEntity<>(HttpStatus.OK);
	}
	
	@GetMapping("/Download")
	public void downloadExcel(HttpServletResponse response) {
		response.setContentType("application/octet-stream");
		String key="Content-Disposition";
		String value="attachment;filename=Sales_data.xlsx";
		response.setHeader(key,value);
		dataService.getExcel(response);
		
	}

}
