package com.mail.demo.been;

import java.util.List;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;


@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class EmailData {
	
	public String subject;
	public String content;
	public List<String> attachment;
	public String fromId;
	public String toId;

}
