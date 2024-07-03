package com.FileUploder.FileUploadService;

import java.io.File;
import java.io.IOException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import com.FileUploder.Entity.FileData;
import com.FileUploder.FileDataRepository.FileDataRepository;
@Service
public class FileUploadService {
	
	@Autowired
	FileDataRepository fileDataRepository;

	
	 private final String fileLocation = "C:\\React\\ecom\\src\\Assiets";

	    public String uploadFile(MultipartFile file) throws IOException {
	        if (!file.isEmpty()) {
	            String fileName = file.getOriginalFilename();
	            String filePath = fileLocation + File.separator + fileName;
	            File dest = new File(filePath);
	            file.transferTo(dest);
	            FileData fileData = new FileData();
	            fileData.setFileName(file.getOriginalFilename());
	            fileData.setFilePath(filePath);
	            fileData.setFileType(file.getContentType());
	            fileDataRepository.save(fileData);
	            return filePath;
	        } else {
	            throw new IllegalArgumentException("File is empty.");
	        }
	    }

}
