package com.example.demo.repository;


import java.util.Collection;


import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.transaction.annotation.Transactional;

import com.example.demo.beans.Amitie;
import com.example.demo.beans.User;
import com.fasterxml.jackson.annotation.JsonView;


public interface AmitieRep extends JpaRepository<Amitie, Integer> {
	
List<Amitie> findAll();

Amitie findById(int id);

@Query (value ="select friend_id as id,nom,prenom,password,datedenaissance,email,ime,telephone from Amitie,user   where user.id=amitie.friend_id and user_id=:user_id union select user_id  as id ,nom,prenom,password,datedenaissance,email,ime,telephone  from Amitie,user  where  user.id=amitie.user_id and  friend_id=:user_id",nativeQuery = true)
List<Object> findFrList(@Param("user_id") int user_id);


@Modifying
@Transactional
@Query (value ="delete from amitie  where  (friend_id=:idf or user_id=:idf) and (user_id=:idu or friend_id=:idu) ",nativeQuery = true)
void deleteu(@Param("idf") int idf ,@Param("idu") int idu  );
/*
@Query ("select telephone,password,ime,email,nom,prenom from User where telephone=:telephone and password=:password")
Object check(@Param("telephone") String  telephone ,@Param("password") String password);

@Query ("select nom,password from User where email=:email")
Object checke(@Param("email") String  email);

@Query ("select nom,password from User where telephone=:telephone")
Object checkn(@Param("telephone") String  telephone);

@Query ("select new com.example.demo.beans.User (u.id,u.nom,u.prenom,u.password,u.email,u.datedenaissance,u.ime,u.telephone)" + " from User u where u.telephone=:telephone")
User getIme(@Param("telephone") String  telephone);
*/



};
