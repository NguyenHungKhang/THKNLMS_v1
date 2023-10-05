package com.nguyenhungkhang.DemoForTest.model;

import java.sql.Date;
import java.util.ArrayList;
import java.util.Collection;
import java.util.List;

import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;

import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.JsonIdentityReference;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Builder
@Table(name = "user")
@NoArgsConstructor
@AllArgsConstructor
@Data
public class User {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "id")
	private Long id;

	@Column(name = "createdtime")
	private Date createdTime;

	@Column(name = "modifiedtime")
	private Date modifiedTime;
	
	@Column(nullable = false, name = "familyname")
	private String familyName;
	
	@Column(nullable = false, name = "givenname")
	private String givenName;
	
	@Column(nullable = false, name = "email", unique=true)
	private String email;
	
	@Column(name = "facebook", unique=true)
	private String facebook;
	
	@Column(name = "phone", unique=true)
	private String phone;
	
	@Column(nullable = false, name = "picture")
	private String picture;
	
	@Column(name = "lastlogintime")
	private Date lastLoginTime;
	
	@Column(name = "role")
	private String role;
	
//	@OneToMany(mappedBy="id.user")
//	@EqualsAndHashCode.Exclude
//    @ToString.Exclude
//	private List<Trainer> trainers;
//	
//	@OneToMany(mappedBy="id.user")
//	@EqualsAndHashCode.Exclude
//    @ToString.Exclude
//	private List<Teacher> teachers;
//	
//	
//	@OneToMany(mappedBy="id.user")
//	@EqualsAndHashCode.Exclude
//    @ToString.Exclude
//	private List<Student> students;
//	
//	@OneToMany(mappedBy="owner")
//	@EqualsAndHashCode.Exclude
//    @ToString.Exclude
//    private List<Course> courses;
	
//	@OneToMany(mappedBy="owner", fetch=FetchType.LAZY)
//	@JsonIdentityReference(alwaysAsId = true)
//    private List<Post> posts;
	
//	@OneToMany(mappedBy="owner")
//	@EqualsAndHashCode.Exclude
//    @ToString.Exclude
//    private List<PostComment> comments;
	
	public Collection<? extends GrantedAuthority> getAuthorities() {
		List<GrantedAuthority> authList = new ArrayList<>();
		authList.add(new SimpleGrantedAuthority(role));
		return authList;
	}
	
}
