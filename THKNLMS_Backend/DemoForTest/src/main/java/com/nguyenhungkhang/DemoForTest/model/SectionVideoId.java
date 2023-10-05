package com.nguyenhungkhang.DemoForTest.model;

import java.io.Serializable;

import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;

import jakarta.persistence.Column;
import jakarta.persistence.Embeddable;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
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
public class SectionVideoId implements Serializable {

	/**
	* 
	*/
	private static final long serialVersionUID = 1L;

	@ManyToOne
	@JoinColumn(name="sectionid")
	@EqualsAndHashCode.Exclude
    @ToString.Exclude
	private Section section;

	@Column(nullable = false, name = "video")
	private String video;
}
