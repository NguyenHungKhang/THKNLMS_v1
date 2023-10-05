package com.nguyenhungkhang.DemoForTest.model;

import java.sql.Date;
import java.util.List;

import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;
import lombok.ToString;

@Entity
@Table(name = "course")
@NoArgsConstructor
@AllArgsConstructor
@Data
//@JsonIdentityInfo(generator = ObjectIdGenerators.PropertyGenerator.class,property="id")
public class Course {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "id")
	private Long id;

	@Column(nullable = false, name = "createdtime")
	private Date createdTime;

	@Column(nullable = false, name = "modifiedtime")
	private Date modifiedTime;
	
	@Column(nullable = false, name = "name")
	private String name;
	
	@Column(nullable = false, name = "desc")
	private String desc;
	
	@Column(nullable = false, name = "picture")
	private String picture;
	
	@Column(nullable = false, name = "isdeleted")
	private Boolean isDeleted;
	
	@Column(nullable = true, name = "lastlogintime")
	private Date lastLoginTime;
	
	@Column(nullable = false, name = "starttime")
	private Date startTime;
	
	@Column(nullable = false, name = "endtime")
	private Date endTime;
	
	@ManyToOne
	@JoinColumn(name="ownerid")
	private User owner;
	
//	@OneToMany(mappedBy="id.course")
//	@EqualsAndHashCode.Exclude
//    @ToString.Exclude
//	private List<Trainer> trainers;
//	
//	@OneToMany(mappedBy="id.course")
//	@EqualsAndHashCode.Exclude
//    @ToString.Exclude
//	private List<Teacher> teachers;
//	
//	@OneToMany(mappedBy="id.course")
//	@EqualsAndHashCode.Exclude
//    @ToString.Exclude
//	private List<Student> students;
	
//	@OneToMany(mappedBy="course")
//	private List<Post> posts;
	
}
