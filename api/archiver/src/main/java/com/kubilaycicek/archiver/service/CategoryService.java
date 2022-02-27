package com.kubilaycicek.archiver.service;

import com.kubilaycicek.archiver.payload.dto.CategoryDto;

import java.util.List;

public interface CategoryService{
    List<CategoryDto> getList();
    CategoryDto saveCategory(CategoryDto categoryDto);
}