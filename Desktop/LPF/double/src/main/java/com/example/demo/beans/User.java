package com.example.demo.beans;

import java.util.Date;


import javax.persistence.Entity;

import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

import com.fasterxml.jackson.annotation.JsonIgnore;
@Entity
public class User {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	public String nom;
	private String prenom;
	private String password ; 
	private String email ; 
	@Temporal(TemporalType.DATE)
	private Date datedenaissance ; 
	private String ime ;
	private String telephone ;

	@JsonIgnore
	public User() {
		super();

	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public Date getDatedenaissance() {
		return datedenaissance;
	}
	public void setDatedenaissance(Date datedenaissance) {
		this.datedenaissance = datedenaissance;
	}
	public String getIme() {
		return ime;
	}
	public void setIme(String ime) {
		this.ime = ime;
	}
	public String getTelephone() {
		return telephone;
	}
	public User(int id , String nom, String prenom, String password, String email, Date datedenaissance, String ime,
			String telephone) {
		this.id=id;
		this.nom = nom;
		this.prenom = prenom;
		this.password = password;
		this.email = email;
		this.datedenaissance = datedenaissance;
		this.ime = ime;
		this.telephone = telephone;
	}
	public void setTelephone(String telephone) {
		this.telephone = telephone;
	}
	public User(int id) {
		super();
		this.id = id;
	}
	public int getId() {
		return id;
	}
	public String getNom() {
		return nom;
	}
	public void setNom(String nom) {
		this.nom = nom;
	}
	public String getPrenom() {
		return prenom;
	}
	public void setPrenom(String prenom) {
		this.prenom = prenom;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	public void setId(int id) {
		this.id = id;
	}

	
	

}
