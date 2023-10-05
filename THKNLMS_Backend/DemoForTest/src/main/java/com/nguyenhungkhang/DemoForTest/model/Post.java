package com.nguyenhungkhang.DemoForTest.model;

import java.sql.Timestamp;

import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.PreUpdate;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Builder
@Table(name = "post")
@AllArgsConstructor
@NoArgsConstructor
@Data
public class Post {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "id")
	private Long id;
	
	@CreationTimestamp
	@Column(name = "createdtime")
	private Timestamp createdTime;
	
	@UpdateTimestamp
	@Column(name = "modifiedtime")
	private Timestamp modifiedTime;
	
	@Column(nullable = false, name = "content")
	private String content;
	
	@ManyToOne
	@JoinColumn(name="ownerid")
	private User owner;
	
	@ManyToOne
	@JoinColumn(name="courseid")
	private Course course;
//	
//	@OneToMany(mappedBy = "post")
//	@EqualsAndHashCode.Exclude
//    @ToString.Exclude
//	private List<PostComment> comments;
//	
//	@OneToMany(mappedBy = "post")
//	@EqualsAndHashCode.Exclude
//    @ToString.Exclude
//	private List<PostFile> files;
//	
//	@OneToOne (mappedBy = "post")
//	@EqualsAndHashCode.Exclude
//    @ToString.Exclude
//	private PostSection postSection;
}
