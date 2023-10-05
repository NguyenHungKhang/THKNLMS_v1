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
import jakarta.persistence.OneToOne;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;
import lombok.ToString;

@Entity
@Table(name = "section")
@AllArgsConstructor
@NoArgsConstructor
@Data
@JsonIdentityInfo(generator = ObjectIdGenerators.PropertyGenerator.class,property="id")
public class Section {

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
	
	@Column(nullable = false, name = "isdeleted")
	private Boolean isDeleted;
	
	@Column(nullable = false, name = "isopen")
	private Boolean isOpen;
	
	@Column(nullable = false, name = "opentime")
	private Date openTime;
	
	@ManyToOne
	@JoinColumn(name="subjectid")
	@EqualsAndHashCode.Exclude
    @ToString.Exclude
	private Subject subject;
	
	@OneToMany(mappedBy = "section")
	@EqualsAndHashCode.Exclude
    @ToString.Exclude
    private List<SectionAssignment> assignments;
	
	@OneToMany(mappedBy = "id.section")
	@EqualsAndHashCode.Exclude
    @ToString.Exclude
    private List<SectionContent> contents;
	
	@OneToMany(mappedBy = "id.section")
	@EqualsAndHashCode.Exclude
    @ToString.Exclude
    private List<SectionVideo> videos; 
	
	@OneToOne(mappedBy = "section")
	@EqualsAndHashCode.Exclude
    @ToString.Exclude
    private PostSection postSection;
}
