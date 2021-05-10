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

import com.example.demo.beans.Position;
import com.example.demo.repository.PosRe;
@CrossOrigin(origins ="http://localhost:4200")

@RestController
@RequestMapping( value = "/position", 
produces = "application/json", 
method = {RequestMethod.GET, RequestMethod.POST})
public class PositionController {
	String lat; 
	String lng ; 
	@Autowired
	private PosRe repository;
	@CrossOrigin(origins ="http://localhost:4200")
	@GetMapping("/all")
	public List<Position>findAll(){
		return repository.findAll();
	}
	@PostMapping("/save")
	public void save(@RequestBody Position student){
		repository.save(student);
	}
	
	
	@DeleteMapping("/delete/{id}")
	public void delete(@PathVariable (required = true) String id){
		Position s = repository.findById(Integer.parseInt(id));
		repository.delete(s);
	}

	@GetMapping(value = "/count")
	public long countPosition() {
		return repository.count();
	}
	@CrossOrigin(origins ="http://localhost:4200")
	@GetMapping(value = "/getpos")
	public List<Position> getpost() {
		return repository.findPos();
	}
	@GetMapping(value = "/byDate/{id}/{date1}/{date2}")
    public List<Position> findPositionBetween2Dates(@PathVariable (required = true) String id, @PathVariable (required = true) String date1, @PathVariable (required = true) String date2) throws ParseException {
        return repository.findPositionBetween2Dates(Integer.parseInt(id),new SimpleDateFormat("yyyy-MM-dd").parse(date1),new SimpleDateFormat("yyyy-MM-dd").parse(date2));

}
	@GetMapping(value = "/posus/{id}")
    public Position findposbyus(@PathVariable (required = true) int id) throws ParseException {
        return repository.findPosByUs(id);
}
}
