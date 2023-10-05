package com.nguyenhungkhang.DemoForTest.model;

import java.io.Serializable;

import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;

import jakarta.persistence.Column;
import jakarta.persistence.Embeddable;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.JoinColumns;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.MapsId;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;
import lombok.ToString;

@Embeddable
@AllArgsConstructor
@NoArgsConstructor
@Data
@JsonIdentityInfo(generator = ObjectIdGenerators.PropertyGenerator.class,property="id")
public class StudentInSubjectId implements Serializable{
	/**
	* 
	*/
	private static final long serialVersionUID = 1L;

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
	@JoinColumn(name="subjectid")
	@EqualsAndHashCode.Exclude
    @ToString.Exclude
	private Subject subject;
}
