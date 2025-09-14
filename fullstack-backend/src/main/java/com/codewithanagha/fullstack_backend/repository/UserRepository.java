package com.codewithanagha.fullstack_backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.codewithanagha.fullstack_backend.model.User;

public interface UserRepository extends JpaRepository<User,Long>{

}
