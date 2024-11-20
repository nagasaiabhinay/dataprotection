package com.example.dataprotection.service;

import com.example.dataprotection.model.FormEntity;
import com.example.dataprotection.repository.FormRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class FormService {

    @Autowired
    private FormRepository formRepository;

    public void saveForm(FormEntity formEntity) {
        formRepository.save(formEntity);
    }
}
