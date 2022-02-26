package com.kubilaycicek.archiver.service;

import com.kubilaycicek.archiver.mapper.CategoryMapper;
import com.kubilaycicek.archiver.payload.dto.CategoryDto;
import com.kubilaycicek.archiver.repository.CategoryRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class CategoryServiceImpl implements CategoryService {

    private final CategoryMapper categoryMapper;
    private final CategoryRepository categoryRepository;

    @Override
    public CategoryDto saveCategory(CategoryDto categoryDto) {
        return null;
    }

    @Override
    public void deleteCategory(String uuid) {

    }

    @Override
    public List<CategoryDto> getList() {
        return null;
    }

    @Override
    public Optional<CategoryDto> findByUuid(String uuid) {
        return Optional.empty();
    }
}
