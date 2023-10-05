package com.nguyenhungkhang.DemoForTest.model;

import java.io.Serializable;

import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;

import jakarta.persistence.Column;
import jakarta.persistence.Embeddable;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Embeddable
@AllArgsConstructor
@NoArgsConstructor
@Data
@JsonIdentityInfo(generator = ObjectIdGenerators.PropertyGenerator.class,property="id")
public class SectionFileId implements Serializable {

	/**
	* 
	*/
	private static final long serialVersionUID = 1L;

	@Column(nullable = false, name = "sectionid")
	private Long sectionId;

	@Column(nullable = false, name = "file")
	private String file;
}
