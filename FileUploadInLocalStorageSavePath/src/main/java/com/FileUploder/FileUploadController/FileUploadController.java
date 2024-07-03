package com.FileUploder.FileUploadController;

import java.io.IOException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestPart;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.FileUploder.FileDataRepository.FileDataRepository;
import com.FileUploder.FileUploadService.FileUploadService;

@RestController
@CrossOrigin("http://localhost:3000")
public class FileUploadController {
	
	 private final FileUploadService fileUploadService;

	    @Autowired
	    public FileUploadController(FileUploadService fileUploadService) {
	        this.fileUploadService = fileUploadService;
	    }
FileDataRepository fileDataRepository;
	    
	    @PostMapping("/upload")
	    public ResponseEntity<String> uploadFile(@RequestPart("file") MultipartFile file) {
	        try {
	            String filePath = fileUploadService.uploadFile(file);
	            
	            return ResponseEntity.ok("File uploaded successfully. Path: " + filePath);
	        } catch (IOException e) {
	            e.printStackTrace();
	            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Failed to upload file.");
	        }
	    }

}
