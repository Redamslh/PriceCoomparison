package com.example.demo.repository;


import java.sql.Date;

import java.util.Collection;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.example.demo.beans.Position;


public interface PosRe extends JpaRepository<Position, Integer> {
	
List<Position> findAll();

Position findById(int id);

@Query ("select new com.example.demo.beans.Position(u.log,u.lon) from Position u ")
List<Position> findPos();


@Query (value="select id,log,lon,id_user_id,date from Position  where id_user_id=:id and date between :date1 and :date2",nativeQuery = true)
List<Position> findPositionBetween2Dates(@Param("id") int id,@Param("date1") java.util.Date date,@Param("date2") java.util.Date date2);

@Query (value="select id,log,lon,id_user_id,date from Position  where id_user_id=:idu ORDER BY id DESC LIMIT 1 ",nativeQuery = true)
 Position findPosByUs(@Param("idu") int id);



}
