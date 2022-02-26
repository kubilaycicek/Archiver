package com.kubilaycicek.archiver.mapper;

import com.kubilaycicek.archiver.payload.dto.CategoryDto;
import com.kubilaycicek.archiver.payload.model.Category;
import org.mapstruct.IterableMapping;
import org.mapstruct.Mapper;
import org.mapstruct.Named;

import java.util.List;

@Mapper(componentModel = "spring")
public interface CategoryMapper {
    @Named("toCategory")
    Category toCategory(CategoryDto categoryDto);

    @Named("toCategoryDto")
    CategoryDto toCategoryDto(Category category);

    @IterableMapping(qualifiedByName = "toCategory")
    List<Category> toCategoryList(List<CategoryDto> categoryDtoList);

    @IterableMapping(qualifiedByName = "toCategoryListDto")
    List<CategoryDto> toCategoryListDto(List<Category> categoryList);
}