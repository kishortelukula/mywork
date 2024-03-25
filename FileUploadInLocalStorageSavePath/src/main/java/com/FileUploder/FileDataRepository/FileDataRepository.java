package com.FileUploder.FileDataRepository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.FileUploder.Entity.FileData;

public interface FileDataRepository extends JpaRepository<FileData, Long>{

}
