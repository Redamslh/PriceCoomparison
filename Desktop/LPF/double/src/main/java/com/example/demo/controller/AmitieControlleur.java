package com.example.demo.controller;


import java.text.ParseException;
import java.text.SimpleDateFormat;
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

import com.example.demo.beans.Amitie;
import com.example.demo.beans.Position;
import com.example.demo.beans.User;
import com.example.demo.repository.AmitieRep;
import com.example.demo.repository.PosRe;
@CrossOrigin(origins ="http://localhost:4200")
@RestController
@RequestMapping( value = "/ami", 
produces = "application/json", 
method = {RequestMethod.GET, RequestMethod.POST})
public class AmitieControlleur {
	int id_user; 
	int id_target; 
	@Autowired
	private AmitieRep repository;
	@GetMapping("/all")
	public List<Amitie>findAll(){
		return repository.findAll();
	}
	@PostMapping("/save")
	public void save(@RequestBody Amitie student){
		repository.save(student);
	}
	
	
	@DeleteMapping("/delete/{id}")
	public void delete(@PathVariable (required = true) int id){
		Amitie s = repository.findById(id);
		repository.delete(s);
	}

	@GetMapping(value = "/count")
	public long countPosition() {
		return repository.count();
	}
	
	@GetMapping(value = "/listfr/{id}")
	public List<Object> listfr(@PathVariable int id) {
		return repository.findFrList(id);
	}
	
	@DeleteMapping(value = "/delu/{idf}/{idu}")
	public void deletef(@PathVariable int idf , @PathVariable int idu) {
		 repository.deleteu(idf, idu);
	}
	/*
	@CrossOrigin(origins ="http://localhost:4200")
	@GetMapping(value = "/getpos")
	public List<Position> getpost() {
		return repository.findPos();
	}
	
	@GetMapping(value = "/byDate/{id}/{date1}/{date2}")
    public Collection<?> findPositionBetween2Dates(@PathVariable (required = true) String id, @PathVariable (required = true) String date1, @PathVariable (required = true) String date2) throws ParseException {
        return repository.findPositionBetween2Dates(Integer.parseInt(id),new SimpleDateFormat("yyyy-MM-dd").parse(date1),new SimpleDateFormat("yyyy-MM-dd").parse(date2));
} 
*/

}
