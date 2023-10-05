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
@Table(name = "postcomment")
@AllArgsConstructor
@NoArgsConstructor
@Data
@JsonIdentityInfo(generator = ObjectIdGenerators.PropertyGenerator.class,property="id")
public class PostComment {

	@Id
	@GeneratedValue
	private Long id;
	
	@Column(nullable = false, name = "createdtime")
	private Date createdTime;
	
	@Column(nullable = false, name = "modifiedtime")
	private Date modifiedTime;
	
	@Column(nullable = false, name = "content")
	private String content;
	
	@ManyToOne
	@JoinColumn(name="postid")
	@EqualsAndHashCode.Exclude
    @ToString.Exclude
	private Post post;
	
	@ManyToOne
	@JoinColumn(name="replyid")
	@EqualsAndHashCode.Exclude
    @ToString.Exclude
	private PostComment parentComment;
	
	@ManyToOne
	@JoinColumn(name="ownerid")
	@EqualsAndHashCode.Exclude
    @ToString.Exclude
	private User owner;
	
	@OneToMany(mappedBy="parentComment")
	@EqualsAndHashCode.Exclude
    @ToString.Exclude
	private List<PostComment> childComments;
}
