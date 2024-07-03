package com.test.demo.repository;

import org.springframework.data.repository.CrudRepository;

import com.test.demo.model.posts;

public interface postRepository extends CrudRepository<posts, Integer> {

}
