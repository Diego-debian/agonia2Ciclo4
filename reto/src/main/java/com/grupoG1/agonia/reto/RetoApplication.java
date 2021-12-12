package com.grupoG1.agonia.reto;

import com.grupoG1.agonia.reto.repository.crud.AccessoryCrudRepository;
import com.grupoG1.agonia.reto.repository.crud.UserCrudRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class RetoApplication implements CommandLineRunner {

	@Autowired
	private UserCrudRepository userRepo;
	@Autowired
	private AccessoryCrudRepository accessoryCrud;

	public static void main(String[] args)
	{
		SpringApplication.run(RetoApplication.class, args);
	}
	@Override
	public void run(String... args) throws Exception {
		System.out.println("Aqui se ejecutaran la creación de documentos de mongo...");

		userRepo.deleteAll();

		accessoryCrud.deleteAll();


	}

}
