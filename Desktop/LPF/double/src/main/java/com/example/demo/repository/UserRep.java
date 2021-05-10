package com.example.demo.repository;


import java.util.Collection;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.example.demo.beans.User;
import com.fasterxml.jackson.annotation.JsonView;


public interface UserRep extends JpaRepository<User, Integer> {
	
List<User> findAll();

	User findById(int id);

@Query ("select telephone,password,ime,email,nom,prenom from User where telephone=:telephone and password=:password")
Object check(@Param("telephone") String  telephone ,@Param("password") String password);

@Query ("select nom,password from User where email=:email")
Object checke(@Param("email") String  email);

@Query ("select nom,password from User where telephone=:telephone")
Object checkn(@Param("telephone") String  telephone);

@Query ("select new com.example.demo.beans.User (u.id,u.nom,u.prenom,u.password,u.email,u.datedenaissance,u.ime,u.telephone)" + " from User u where u.telephone=:telephone")
User getIme(@Param("telephone") String  telephone);




};
