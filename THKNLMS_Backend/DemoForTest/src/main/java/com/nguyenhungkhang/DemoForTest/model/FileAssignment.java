package com.nguyenhungkhang.DemoForTest.model;

import java.sql.Date;

import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name = "fileassignment")
@AllArgsConstructor
@NoArgsConstructor
@Data
@JsonIdentityInfo(generator = ObjectIdGenerators.PropertyGenerator.class,property="id")
public class FileAssignment {

	@Id
	@GeneratedValue
	private Long id;
	
	@Column(nullable = false, name = "createdtime")
	private Date createdTime;
	
	@Column(nullable = false, name = "modifiedtime")
	private Date modifiedTime;
	
	@Column(nullable = false, name = "studentid")
	private Long studentId;
	
	@Column(nullable = false, name = "courseid")
	private Long courseId;
	
	@Column(nullable = false, name = "assignmentid")
	private Long assignmentId;
	
	@Column(nullable = false, name = "file")
	private String file;
	
}
