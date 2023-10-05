package com.nguyenhungkhang.DemoForTest.model;

import java.sql.Date;

import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;

import jakarta.persistence.Column;
import jakarta.persistence.EmbeddedId;
import jakarta.persistence.Entity;
import jakarta.persistence.OneToOne;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;
import lombok.ToString;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "teacher")
@JsonIdentityInfo(generator = ObjectIdGenerators.PropertyGenerator.class,property="id")
public class Teacher {
	
	@EmbeddedId
	private TeacherId id;
	
	@Column(nullable = false, name = "createdtime")
	private Date createdTime;
	
	@Column(nullable = false, name = "modifiedtime")
	private Date modifiedTime;
	
	@OneToOne(mappedBy="teacher")
	@EqualsAndHashCode.Exclude
    @ToString.Exclude
	private Subject subject;
}
