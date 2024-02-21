package com.test.demo;

import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.web.client.RestTemplate;

import com.test.demo.jsonservice.placeholderservice;
import com.test.demo.model.posts;
import com.test.demo.repository.postRepository;

@SpringBootApplication
public class ExternalApiApplication {
	
	private static final Logger log = LoggerFactory.getLogger(ExternalApiApplication.class);

	
	@Bean
	RestTemplate restTemplate() {
		
		return new RestTemplate();
	}
	@Bean
    CommandLineRunner commandLineRunner(placeholderservice placeholderservice, postRepository postRepository) {
        return args -> {
          List<posts>data=placeholderservice.getPosts();          
          log.info("Data is :"+data);
          postRepository.saveAll(data);
          log.info("Data is Inserted");
    };
	}
	public static void main(String[] args) {
		SpringApplication.run(ExternalApiApplication.class, args);
		
		
		
	}

}
