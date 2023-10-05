plugins {
	java
	war
	id("org.springframework.boot") version "3.0.5"
	id("io.spring.dependency-management") version "1.1.0"
}

group = "com.nguyenhungkhang"
version = "0.0.1-SNAPSHOT"
java.sourceCompatibility = JavaVersion.VERSION_17

repositories {
	mavenCentral()
}

dependencies {
	implementation("org.springframework.boot:spring-boot-starter-web")
	providedRuntime("org.springframework.boot:spring-boot-starter-tomcat")
	testImplementation("org.springframework.boot:spring-boot-starter-test")
	implementation("org.springframework.data:spring-data-jpa:3.0.4")
	implementation("org.eclipse.persistence:javax.persistence:2.2.1")
	implementation("org.springframework.boot:spring-boot-starter-data-jpa:3.0.5")
	implementation("mysql:mysql-connector-java:8.0.32")
	implementation("org.thymeleaf:thymeleaf:3.1.1.RELEASE")
	implementation("org.springframework.boot:spring-boot-starter-thymeleaf:3.0.5")
	implementation("org.springframework.boot:spring-boot-devtools:3.0.5")
	implementation("org.springframework.boot:spring-boot-starter-mail:3.0.5")
	implementation("org.springframework.boot:spring-boot-starter-oauth2-client:3.0.5")
	implementation("org.springframework.boot:spring-boot-starter-security:3.0.5")
	implementation("org.springframework.security:spring-security-web:6.0.2")
	implementation("org.springframework.security:spring-security-config:6.0.2")
	compileOnly("org.projectlombok:lombok:1.18.26")
	implementation("io.jsonwebtoken:jjwt-api:0.9.1")
    runtimeOnly("io.jsonwebtoken:jjwt-impl:0.9.1")
    runtimeOnly("io.jsonwebtoken:jjwt-gson:0.9.1")
	implementation("com.google.api-client:google-api-client:2.2.0")
	implementation("com.google.http-client:google-http-client:1.43.2")
	implementation("com.google.http-client:google-http-client-jackson2:1.43.3")
}

tasks.withType<Test> {
	useJUnitPlatform()
}
