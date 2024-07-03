package com.mail.demo.Service;


import java.io.File;
import java.io.IOException;
import java.io.InputStream;
import java.nio.file.Files;
import java.nio.file.StandardCopyOption;
import java.util.ArrayList;
import java.util.List;
import java.util.Properties;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;

import com.mail.demo.been.EmailData;
import jakarta.mail.AuthenticationFailedException;
import jakarta.mail.BodyPart;
import jakarta.mail.Flags;
import jakarta.mail.Folder;
import jakarta.mail.Message;
import jakarta.mail.MessagingException;
import jakarta.mail.Multipart;
import jakarta.mail.Session;
import jakarta.mail.Store;
import jakarta.mail.search.FlagTerm;
import lombok.Value;

@org.springframework.stereotype.Service
public class Service {
	
	@Autowired
	JavaMailSender mailSender;
	
	  

	public void sentMailwithAttach(String tomail,String subject,String body,List<String> paths) {
		
		
	}
	
	
	
	public void sentMail(String tomail,String subject,String body) {
		
		SimpleMailMessage mail= new SimpleMailMessage();
		
		mail.setFrom("saikumar.gaini@eidiko-india.com");
		mail.setTo(tomail);
		mail.setSubject(subject);
		mail.setText(body);
		System.out.println("before mail sent");
		mailSender.send(mail);
		System.out.println("mail sent");
		
	}
	
	

		public void readMail() {
		
		
		Properties properties= new Properties();
		
		properties.setProperty("mail.store.protocol", "imaps");
//		properties.setProperty("mail.store.host", "mail.eidiko-india.com ");
		properties.setProperty("mail.store.port", "993");
		
		Session session=Session.getInstance(properties);
		session.setDebug(true);
		
		try (Store store = session.getStore()){
//			Store store=session.getStore();
			store.connect("mail.eidiko-india.com","kishor.telukula@eidiko-india.com", "Kishor@123");
			
			Folder index=store.getFolder("INBOX");
			index.open(Folder.READ_WRITE);
			
			
			FlagTerm term=new FlagTerm(new Flags(Flags.Flag.SEEN), false);
			Message[] message=index.search(term);
			
			
			
//			List<EmailData>emailData=new ArrayList<>();
			for(int i=0;i<message.length;i++) {
				
				System.out.println(message[i].getSubject());
//				String mailContent=this.readContent(message[i]);
//				List<String>attached=this.getAttachment(message[i]);
//				System.out.println("Mail Subject :"+mailContent);
//				System.out.println("Mail Attachments :"+attached);
				System.out.println("--------------------------");
							
				
				
				
				message[i].setFlag(Flags.Flag.SEEN, true);
				
			}
			
			index.close(true);
			store.close();
		} catch (AuthenticationFailedException e) {
		    // Handle authentication failure (e.g., log the error)
		    System.err.println("Authentication failed: " + e.getMessage());
		    e.printStackTrace();
		} catch (MessagingException e) {
		    // Handle other messaging exceptions
		    System.err.println("Messaging exception: " + e.getMessage());
		    e.printStackTrace();
		} catch (Exception e) {
		    // Catch any other unexpected exceptions
		    System.err.println("Unexpected exception: " + e.getMessage());
		    e.printStackTrace();
		}
	}	
	
	
	public String readContent(Message message) {
		
	String content = null;
		
		try {
			if (message.isMimeType("text/plain") || message.isMimeType("text/html")) {
				
				content= (String) message.getContent();
			}
			else if (message.isMimeType("multipart/*")) {
			Multipart part=	(Multipart) message.getContent();
			for(int i=0;i<part.getCount();i++) {
			BodyPart bodyPart=	part.getBodyPart(i);
			if(bodyPart.isMimeType("text/plain")) {
				content= (String) bodyPart.getContent();
			}
			}
			}
		} catch (MessagingException | IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
			
		}
		
		
		return content;
		
	}
	
	public List<String> getAttachment(Message message){
		
		List<String>listOfAttachments= new ArrayList<>();
		
		try {
			if(message.isMimeType("multipart/*")) {
			
				Multipart part= (Multipart) message.getContent();
				
						for(int i=0;i<part.getCount();i++) {
							BodyPart bodyPart=part.getBodyPart(i);
							if(bodyPart.ATTACHMENT.equalsIgnoreCase(bodyPart.getDisposition())) {
								
								InputStream inputStream=bodyPart.getInputStream();
								File file=new File("src/main/resources/templates/"+bodyPart.getFileName());
								Files.copy(inputStream, file.toPath(),StandardCopyOption.REPLACE_EXISTING);
								
								listOfAttachments.add(file.getAbsolutePath());
							}
							
						}
			}
		} catch (MessagingException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		
		return listOfAttachments;
		
	}
	
}
