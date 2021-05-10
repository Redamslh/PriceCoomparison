
package com.example.demo.beans;

import java.util.Date;


import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;


@Entity
public class Amitie {
	@ManyToOne()
    @JoinColumn(name = "user_id")
    private User user_id;

    /**
     * the user to whom the friendship was asked
     */
    @ManyToOne()
    @JoinColumn(name = "friend_id")
    private User friend_id;
    public Amitie(User user_id, User friend_id, int id) {
		super();
		this.user_id = user_id;
		this.friend_id = friend_id;
		this.id = id;
	}

	public User getUser_id() {
		return user_id;
	}

	public void setUser_id(User user_id) {
		this.user_id = user_id;
	}

	public User getFriend_id() {
		return friend_id;
	}

	public void setFriend_id(User friend_id) {
		this.friend_id = friend_id;
	}

	public Amitie() {
		super();
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}



	// ...
    /**
     * the user who asked the friendship
     */
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private int id;
	
	
    public Amitie(User friend_id) {
		this.friend_id = friend_id;
	}


    
    
}