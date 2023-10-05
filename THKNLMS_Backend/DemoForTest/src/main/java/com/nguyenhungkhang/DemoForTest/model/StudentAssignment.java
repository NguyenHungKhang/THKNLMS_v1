package com.nguyenhungkhang.DemoForTest.model;

import java.sql.Date;

import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.JoinColumns;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.MapsId;
import jakarta.persistence.OneToOne;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;
import lombok.ToString;

@Entity
@Table(name = "studentassignment")
@AllArgsConstructor
@NoArgsConstructor
@Data
@JsonIdentityInfo(generator = ObjectIdGenerators.PropertyGenerator.class,property="id")
public class StudentAssignment {

	@Id
	@GeneratedValue
	private Long id;
	
	@Column(nullable = false, name = "createdtime")
	private Date createdTime;
	
	@Column(nullable = false, name = "modifiedtime")
	private Date modifiedTime;
	
	@Column(nullable = false, name = "score")
	private Long score;
	
	@ManyToOne
	@JoinColumns({
		@JoinColumn(name = "courseid", referencedColumnName = "courseid"),
		@JoinColumn(name = "studentid", referencedColumnName = "userid")
	})
	@MapsId("id")
	@EqualsAndHashCode.Exclude
    @ToString.Exclude
	private Student student;
	
	@ManyToOne
	@JoinColumn(name="assignmentid")
	@EqualsAndHashCode.Exclude
    @ToString.Exclude
	private SectionAssignment assignment;
}
