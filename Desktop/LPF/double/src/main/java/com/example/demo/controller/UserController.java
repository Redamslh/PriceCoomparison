package com.example.demo.controller;


import java.text.ParseException;
import java.util.Collection;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMethod;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.beans.User;
import com.example.demo.repository.UserRep;

@RestController
@RequestMapping( value = "/user", 
produces = "application/json", 
method = {RequestMethod.GET, RequestMethod.POST})
public class UserController {
	@Autowired
	private UserRep repository;
	@CrossOrigin(origins ="http://localhost:4200")
	@GetMapping("/all")
	public List<User>findAll(){
		return repository.findAll();
	}
	@PostMapping("/save")
	public void save(@RequestBody User student){
		repository.save(student);
	}
	
	
	@DeleteMapping("/delete/{id}")
	public void delete(@PathVariable (required = true) String id){
		User s = repository.findById(Integer.parseInt(id));
		repository.delete(s);
	}	
	@CrossOrigin(origins ="http://localhost:4200")
	@GetMapping(value = "/count")
	public long countUser() {
		return repository.count();
	}
	
	@GetMapping(value = "/id/{id}")
	public User findId(@PathVariable (required = true) int id) {
		return repository.findById(id);
	}
	
	@GetMapping(value="/check/{telephone}/{password}")
	public int checkUser(@PathVariable (required = true) String telephone ,@PathVariable (required = true) String password )  throws ParseException {
		int b=0  ; 
		if(repository.check(telephone, password)!=null) {
			b= 1;
		}
		else if(repository.check(telephone, password)==null) {
			b= 0;
		}
		return b;
		
	}
	
	@GetMapping(value="/checke/{email}")
	public int checke(@PathVariable (required = true) String email )  throws ParseException {
		int b=0  ; 
		if(repository.checke(email)!=null) {
			b= 1;
		}
		else if(repository.checke(email)==null) {
			b= 0;
		}
		return b;
		
	}
	
	@GetMapping(value="/checkn/{telephone}")
	public int checkn(@PathVariable (required = true) String telephone )  throws ParseException {
		int b=0  ; 
		if(repository.checkn(telephone)!=null) {
			b= 1;
		}
		else if(repository.checkn(telephone)==null) {
			b= 0;
		}
		return b;
		
	}
	
	
	
	@GetMapping(value="/ime/{telephone}")
	public User getIme(@PathVariable (required = true) String telephone )  throws ParseException { 
		return repository.getIme(telephone);
		
	}
	

}
