package com.example.demo;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import io.swagger.v3.oas.annotations.OpenAPIDefinition;
import io.swagger.v3.oas.annotations.info.Contact;
import io.swagger.v3.oas.annotations.info.Info;




@OpenAPIDefinition(
		info =@Info(
				title = "ElderlyCare",
				version = "1.1.2",
				description = "elderlycarenetworkapplication",
				contact = @Contact(
						name = "Janice Magdalene D",
						email = "janicemagdalene@gmail.com"
						)
				)
		)
@SpringBootApplication
public class EldercareApplication {

	public static void main(String[] args) {
		SpringApplication.run(EldercareApplication.class, args);
	}

}
