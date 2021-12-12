package com.grupoG1.agonia.reto.controller;

import com.grupoG1.agonia.reto.model.Accessory;
import com.grupoG1.agonia.reto.service.AccesoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/accessory")
@CrossOrigin("*")
public class AccessoryController {
    @Autowired
    private AccesoryService servicio;

    @GetMapping("/all")
    public List<Accessory> listAll() {
        return servicio.listAll();
    }

    @GetMapping("/{reference}")
    public Optional<Accessory> getAccesory(@PathVariable("reference") String reference) {
        return servicio.getAccesory(reference);
    }

    @PostMapping("/new")
    @ResponseStatus(HttpStatus.CREATED)
    public Accessory create(@RequestBody Accessory accessory) {
        return servicio.create(accessory);
    }

    @PutMapping("/update")
    @ResponseStatus(HttpStatus.CREATED)
    public Accessory update(@RequestBody Accessory accessory) {
        return servicio.update(accessory);
    }

    @DeleteMapping("/{reference}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public boolean delete(@PathVariable("reference") String reference) {
        return servicio.delete(reference);
    }
}
