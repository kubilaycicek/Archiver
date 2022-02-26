package com.kubilaycicek.archiver.service;

import com.kubilaycicek.archiver.payload.dto.CategoryDto;

import java.util.List;
import java.util.Optional;

public interface CategoryService{
    CategoryDto saveCategory(CategoryDto categoryDto);
    void deleteCategory(String uuid);
    List<CategoryDto> getList();
    Optional<CategoryDto> findByUuid(String uuid);
}