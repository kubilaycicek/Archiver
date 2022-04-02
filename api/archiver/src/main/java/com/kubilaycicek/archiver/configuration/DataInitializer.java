package com.kubilaycicek.archiver.configuration;

import com.kubilaycicek.archiver.payload.dto.CategoryDto;

import com.kubilaycicek.archiver.service.CategoryService;
import lombok.RequiredArgsConstructor;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

@RequiredArgsConstructor
@Component
public class DataInitializer implements CommandLineRunner {

    private final CategoryService categoryService;

    @Override
    public void run(String... args) throws Exception {
        categoryService.saveCategory(CategoryDto.builder().name("Architect").build());
        categoryService.saveCategory(CategoryDto.builder().name("Animals").build());
        categoryService.saveCategory(CategoryDto.builder().name("Computer").build());
        categoryService.saveCategory(CategoryDto.builder().name("Nature").build());
        categoryService.saveCategory(CategoryDto.builder().name("Technology").build());
        categoryService.saveCategory(CategoryDto.builder().name("Space").build());
        categoryService.saveCategory(CategoryDto.builder().name("Person").build());
        categoryService.saveCategory(CategoryDto.builder().name("Love").build());
    }
}
