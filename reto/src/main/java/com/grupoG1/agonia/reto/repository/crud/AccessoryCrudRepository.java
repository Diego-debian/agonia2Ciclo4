package com.grupoG1.agonia.reto.repository.crud;

import com.grupoG1.agonia.reto.model.Accessory;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface AccessoryCrudRepository extends MongoRepository<Accessory, String> {
}
