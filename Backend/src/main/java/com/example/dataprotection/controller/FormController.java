package com.example.dataprotection.controller;

import com.example.dataprotection.model.FormEntity;
import com.example.dataprotection.service.FormService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/forms")
public class FormController {

    @Autowired
    private FormService formService;

    @PostMapping
    public ResponseEntity<String> saveForm(@RequestBody FormEntity formEntity) {
    System.out.println("Received form data: " + formEntity); // Debugging
    formService.saveForm(formEntity);
    return ResponseEntity.ok("Form data saved successfully!");
}
}
