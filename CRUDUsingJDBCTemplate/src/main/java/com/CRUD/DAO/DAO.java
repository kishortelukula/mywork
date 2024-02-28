package com.CRUD.DAO;

import java.util.List;
import java.util.Optional;

public interface DAO <E>{
	List<E>getAll();
	void create(E e);
	Optional<E> get(int userId);
	void update(E e,int userId);
	void delete(int userId);

}
