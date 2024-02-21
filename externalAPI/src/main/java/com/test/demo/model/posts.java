package com.test.demo.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.annotation.Version;


public record posts(@Id Integer id,String title, String body,@Version Integer version) {

}
