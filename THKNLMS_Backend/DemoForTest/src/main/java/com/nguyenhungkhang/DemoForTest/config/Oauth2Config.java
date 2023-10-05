package com.nguyenhungkhang.DemoForTest.config;

import java.util.Arrays;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.builders.WebSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;
import org.springframework.security.web.csrf.CookieCsrfTokenRepository;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.CorsConfigurationSource;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;

import com.nguyenhungkhang.DemoForTest.oauth2.UserOauth2Service;
import com.nguyenhungkhang.DemoForTest.services.IUserService;
import com.nguyenhungkhang.DemoForTest.services.imp.UserService;

import jakarta.servlet.Filter;

@Configuration
@EnableWebSecurity
public class Oauth2Config {
	
	 private final JWTRequestFilter jwtRequestFilter;

	 public Oauth2Config(JWTRequestFilter jwtRequestFilter) {
		 this.jwtRequestFilter = jwtRequestFilter;
	 }

	
	@Autowired
	private UserOauth2Service userOauth2Service;
	
	@Autowired
	private IUserService userService = new UserService();

	@Bean
	protected SecurityFilterChain filterChain(HttpSecurity http) throws Exception { 
        http.csrf().disable().cors().configurationSource(corsConfigurationSource()).and().authorizeHttpRequests()
        	.requestMatchers("/v1/oauth/login").permitAll()
			.requestMatchers("/user/**").hasRole("USER")
			.requestMatchers("/admin/**").hasAnyRole("ADMIN")
			.anyRequest()

			.authenticated().and().sessionManagement().sessionCreationPolicy(SessionCreationPolicy.STATELESS);
			
        http.addFilterBefore(jwtRequestFilter, UsernamePasswordAuthenticationFilter.class);
		/*
		 * http.authorizeHttpRequests() .requestMatchers("/login").permitAll()
		 * .anyRequest().permitAll() .and() .oauth2Login() .loginPage("/login")
		 * .userInfoEndpoint() .userService(userOauth2Service) .and()
		 * .successHandler(new AuthenticationSuccessHandler() {
		 * 
		 * @Override public void onAuthenticationSuccess(HttpServletRequest request,
		 * HttpServletResponse response, Authentication authentication) throws
		 * IOException, ServletException {
		 * 
		 * 
		 * //OAuth2User oauthUser = (OAuth2User) authentication.getPrincipal();
		 * userService.processOAuthPostLogin((OAuth2User)
		 * authentication.getPrincipal());
		 * 
		 * response.sendRedirect("/THKNLMS/"); } }) ;
		 */
		return http.build();
	}
	
	@Bean
	CorsConfigurationSource corsConfigurationSource() {
		CorsConfiguration configuration = new CorsConfiguration();
		configuration.setAllowedOrigins(Arrays.asList("http://localhost:3000"));
		configuration.setAllowedMethods(Arrays.asList("GET", "POST", "PUT", "DELETE", "OPTIONS"));
		configuration.setAllowCredentials(true);
		// the below three lines will add the relevant CORS response headers
		configuration.addAllowedOrigin("http://localhost:3000");
		configuration.addAllowedHeader("*");
		configuration.addAllowedMethod("*");
		UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
		source.registerCorsConfiguration("/**", configuration);
		return source;
	}

	@Bean
	public PasswordEncoder passwordEncoder() {
		return new BCryptPasswordEncoder();
	}
	
	protected Filter filterChains(WebSecurity web) throws Exception {
		web.ignoring().requestMatchers("/imag/**", "/css/**", "/js/**");
		return web.build();
	}
	
}
