package com.nguyenhungkhang.DemoForTest.model;

import java.sql.Date;

import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;
import lombok.ToString;

@Entity
@Table(name = "sectionasignmenttext")
@AllArgsConstructor
@NoArgsConstructor
@Data
@JsonIdentityInfo(generator = ObjectIdGenerators.PropertyGenerator.class,property="id")
public class SectionAssignmentText {

	@Id
	@GeneratedValue
	private Long id;
	
	@Column(nullable = false, name = "createdtime")
	private Date createdTime;
	
	@Column(nullable = false, name = "modifiedtime")
	private Date modifiedTime;
	
	@Column(nullable = false, name = "text")
	private String text;
	
	@ManyToOne
	@JoinColumn(name="sectionassignmentid")
	@EqualsAndHashCode.Exclude
    @ToString.Exclude
	private SectionAssignment assignment;
	
}
