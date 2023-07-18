package com.infosys.InfyGO;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.PropertySource;

@SpringBootApplication
@ComponentScan(basePackages = {"com.infosys.InfyGO", "com.infosys.InfyGO.controller"})
@PropertySource(value = {"classpath:configuration.properties"})
public class InfyGoApplication {

	public static void main(String[] args) {
		SpringApplication.run(InfyGoApplication.class, args);
	}

}
