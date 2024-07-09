package com.mail.demo.service;

import java.io.FileNotFoundException;
import java.io.FileOutputStream;
import java.io.IOException;
import java.util.Random;

import com.itextpdf.html2pdf.HtmlConverter;
import com.itextpdf.io.source.ByteArrayOutputStream;
import com.itextpdf.kernel.pdf.PdfWriter;


@org.springframework.stereotype.Service
public class Service {
	
	public String convertHTMLToPDF(String htmlData) {
		Random random = new Random();
		int randomNumber = random.nextInt(81) + 20;
		String outputpath="C:\\micro services\\PdfConvertionforBPM\\src\\main\\resources\\templates\\"+randomNumber+".pdf";
		
		try {
			ByteArrayOutputStream byteArrayOutputStream=new ByteArrayOutputStream();
			PdfWriter pdfWriter= new PdfWriter(byteArrayOutputStream);   		   
			FileOutputStream fileOutputStream= new FileOutputStream(outputpath);
			HtmlConverter.convertToPdf(htmlData, pdfWriter);
			byteArrayOutputStream.writeTo(fileOutputStream);
			byteArrayOutputStream.close();
			fileOutputStream.close();
		} catch (IOException e) {
			e.printStackTrace();
		}
		
	
		return outputpath;
	}

}
