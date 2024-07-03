package com.mail.demo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import com.mail.demo.service.Service;

import ch.qos.logback.classic.Logger;
import jakarta.annotation.PostConstruct;

@SpringBootApplication
public class PdfConvertionforBpmApplication {

	@Autowired
	private Service service;

	/*
	 * // Path to save PDFs (adjust as per your requirement) private String path =
	 * "../PdfConvertionforBPM/src/main/resources/templates";
	 * 
	 * // HTML content example private String
	 */
	  
//	String htmldata = "<!DOCTYPE html>\n" +
//	  "<html>\n" + "<style>\n" + "table, th, td {\n" +
//	  "  border: 1px solid black;\n" + "}\n" + "</style>\n" + "<body>\n" + "\n" +
//	  "<h2>A basic HTML table</h2>\n" + "\n" + "<table style=\"width:100%\">\n" +
//	  "  <tr>\n" + "    <th>Company</th>\n" + "    <th>Contact</th>\n" +
//	  "    <th>Country</th>\n" + "  </tr>\n" + "  <tr>\n" +
//	  "    <td>Alfreds Futterkiste</td>\n" + "    <td>Maria Anders</td>\n" +
//	  "    <td>Germany</td>\n" + "  </tr>\n" + "  <tr>\n" +
//	  "    <td>Centro comercial Moctezuma</td>\n" +
//	  "    <td>Francisco Chang</td>\n" + "    <td>Mexico</td>\n" + "  </tr>\n" +
//	 "</table>\n" + "\n" +
//	  "<p>To understand the example better, we have added borders to the table.</p>\n"
//	  + "\n" + "</body>\n" + "</html>";
	 

	public static void main(String[] args) {
		SpringApplication.run(PdfConvertionforBpmApplication.class, args);
	}
	
	/*
String pdfPath;

	 @PostConstruct
	 public String init(String htmldata) { // Call executePdf
	 try {
		  pdfPath=  executePdf(htmldata);
			 System.out.println("PDF saved to: " + pdfPath);
			 return pdfPath;
	} catch (Exception e) {
		 System.out.println("Failed"+e);
		return e.toString();
	}
		
	 
	 }
	 
	 
	  public String executePdf(String html) { // Call service method to
		  return service.convertHTMLToPDF(html); 
	 }
	 */
	 
}
