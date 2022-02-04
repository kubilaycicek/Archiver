package com.kubilaycicek.archiver;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

@SpringBootApplication
@EnableJpaRepositories
public class ArchiverApplication {

	public static void main(String[] args) {
		SpringApplication.run(ArchiverApplication.class, args);
	}

}
