package com.convertion.demo.Service;

import java.io.ByteArrayOutputStream;
import java.io.FileOutputStream;
import org.springframework.stereotype.Service;
import com.itextpdf.html2pdf.HtmlConverter;
import com.itextpdf.kernel.pdf.PdfWriter;





@Service
public class ConvertionService {
	
	public String htmltopdfConvertion(String htmlData) {
		

		
		
		try {
			ByteArrayOutputStream byteArrayOutputStream = new ByteArrayOutputStream();
			PdfWriter pdfwriter = new PdfWriter(byteArrayOutputStream);
			FileOutputStream fileOutputStream=new FileOutputStream("../htmlConvertion/src/main/resources/templates/createdpdf.pdf");
			HtmlConverter.convertToPdf(htmlData, pdfwriter);
			byteArrayOutputStream.writeTo(fileOutputStream);
			byteArrayOutputStream.close();
			fileOutputStream.close();
			
			return "Convertion sucess";
		} catch (Exception e) {
			e.printStackTrace();
			return "fail";
		}
		
		
		
	}

}
