package com.nguyenhungkhang.DemoForTest.model;

import java.sql.Date;
import java.util.List;

import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.JoinColumns;
import jakarta.persistence.MapsId;
import jakarta.persistence.OneToMany;
import jakarta.persistence.OneToOne;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;
import lombok.ToString;

@Entity
@Table(name = "subject")
@AllArgsConstructor
@NoArgsConstructor
@Data
@JsonIdentityInfo(generator = ObjectIdGenerators.PropertyGenerator.class,property="id")
public class Subject {

	@Id
	@GeneratedValue
	private Long id;
	
	@Column(nullable = false, name = "createdtime")
	private Date createdTime;
	
	@Column(nullable = false, name = "modifiedtime")
	private Date modifiedTime;
	
	@Column(nullable = false, name = "name")
	private String name;
	
	@Column(nullable = false, name = "desc")
	private String desc;
	
	@Column(nullable = false, name = "starttime")
	private Date startTime;
	
	@Column(nullable = false, name = "endtime")
	private Date endTime;
	
	@OneToOne
	@JoinColumns({
		@JoinColumn(name = "courseid", referencedColumnName = "courseid"),
		@JoinColumn(name = "teacherid", referencedColumnName = "userid")
	})
	@MapsId("id")
	@EqualsAndHashCode.Exclude
    @ToString.Exclude
	private Teacher teacher;
	
	@OneToMany(mappedBy = "subject")
	@EqualsAndHashCode.Exclude
    @ToString.Exclude
    private List<Section> sections;
	
	@OneToMany(mappedBy = "id.subject")
	@EqualsAndHashCode.Exclude
    @ToString.Exclude
    private List<TrainerInSubject> trainers;
	
	@OneToMany(mappedBy = "id.subject")
	@EqualsAndHashCode.Exclude
    @ToString.Exclude
    private List<StudentInSubject> students;
}
