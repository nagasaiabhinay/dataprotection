package com.example.dataprotection.repository;

import com.example.dataprotection.model.FormEntity;
import org.springframework.data.jpa.repository.JpaRepository;

public interface FormRepository extends JpaRepository<FormEntity, Long> {
}
