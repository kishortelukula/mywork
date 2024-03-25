package com.product.service;

import java.io.File;
import java.io.IOException;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import com.product.entity.AllProducts;
import com.product.entity.ProductFiles;
import com.product.entity.ProductsDeatils;
import com.product.repository.FileRepo;
import com.product.repository.ProductRepo;

import jakarta.transaction.Transactional;

@Service
public class ProductDetailsService {
	
	@Autowired
	ProductRepo productRepo;
	
	@Autowired
	FileRepo fileRepo;
	
	public String insertProducts(ProductsDeatils deatils) {
		this.productRepo.save(deatils);
		return "Inserted";
		
		
	}
	
	public List<ProductsDeatils> allDetails(){
		return this.productRepo.findAll();
		
	}
	
	public List<AllProducts> getAllProducts() {
        return productRepo.getProducts();
    }
	
	
	public final String location = "C:\\React\\pract\\public\\SuppertedFiles";
	
	public String insertFiles(MultipartFile file ,Integer ProductId) throws IllegalStateException, IOException {
		System.out.println("File..");
		if(file != null && !file.isEmpty()) {
			System.out.println("if..");
			ProductFiles P1 = new ProductFiles();
			P1.setProductId(ProductId);
			P1.setFileName(file.getOriginalFilename());
			String data = location+File.separator+file.getOriginalFilename();
			P1.setFilePath(data);
			File F1 = new File(data);
			file.transferTo(F1);
			this.fileRepo.save(P1);
			
			return "Succesfull";
			
		}else {
			System.out.println("else..");
			return "Fail";
			
		}
		

				
		
	}
	
	
	

	    @Autowired
	    public void EmployeeService(ProductRepo repo, FileRepo fileRepo) {
	        this.productRepo = repo;
	        this.fileRepo = fileRepo;
	    }

	    @Transactional
	    public void saveFilesAndDetails(ProductsDeatils deatils, ProductFiles files) {
	       
	    	ProductsDeatils productsDeatils = productRepo.save(deatils);

	    
	        files.setProductId(productsDeatils.getProductId());
	        fileRepo.save(files);
	    }
	}



