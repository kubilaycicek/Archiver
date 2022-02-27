package com.kubilaycicek.archiver.service;

import com.kubilaycicek.archiver.mapper.CategoryMapper;
import com.kubilaycicek.archiver.payload.dto.CategoryDto;
import com.kubilaycicek.archiver.repository.CategoryRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.UUID;

@Service
@RequiredArgsConstructor
public class CategoryServiceImpl implements CategoryService {

    private final CategoryMapper categoryMapper;
    private final CategoryRepository categoryRepository;

    @Override
    public List<CategoryDto> getList() {
        return categoryMapper.toCategoryDtoList(categoryRepository.findAll());
    }

    @Override
    public CategoryDto saveCategory(CategoryDto categoryDto) {
        categoryDto.setUuid(UUID.randomUUID().toString());
        return categoryMapper.toCategoryDto(categoryRepository.save(categoryMapper.toCategory(categoryDto)));
    }

}