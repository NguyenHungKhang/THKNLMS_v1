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
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;
import lombok.ToString;

@Entity
@Table(name = "sectionassignment")
@AllArgsConstructor
@NoArgsConstructor
@Data
@JsonIdentityInfo(generator = ObjectIdGenerators.PropertyGenerator.class,property="id")
public class SectionAssignment {

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
	
	@ManyToOne
	@JoinColumn(name="sectionid")
	@EqualsAndHashCode.Exclude
    @ToString.Exclude
	private Section section;
	
	@OneToMany(mappedBy = "assignment")
	@EqualsAndHashCode.Exclude
    @ToString.Exclude
	private List<SectionAssignmentFile> files;
	
	@OneToMany(mappedBy = "assignment")
	@EqualsAndHashCode.Exclude
    @ToString.Exclude
	private List<SectionAssignmentText> texts;
	
	@OneToMany(mappedBy = "assignment")
	@EqualsAndHashCode.Exclude
    @ToString.Exclude
	private List<StudentAssignment> studentAssignments;
	
	@OneToMany(mappedBy = "assignment")
	@EqualsAndHashCode.Exclude
    @ToString.Exclude
	private List<PrivateCommentAssignment> privateComments;
}
