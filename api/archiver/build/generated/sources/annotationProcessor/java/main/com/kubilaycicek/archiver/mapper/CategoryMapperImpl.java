package com.kubilaycicek.archiver.mapper;

import com.kubilaycicek.archiver.payload.dto.CategoryDto;
import com.kubilaycicek.archiver.payload.model.Category;
import java.util.ArrayList;
import java.util.List;
import javax.annotation.processing.Generated;
import org.springframework.stereotype.Component;

@Generated(
    value = "org.mapstruct.ap.MappingProcessor",
    date = "2022-03-28T21:56:14+0300",
    comments = "version: 1.4.2.Final, compiler: IncrementalProcessingEnvironment from gradle-language-java-7.3.3.jar, environment: Java 11.0.12 (Oracle Corporation)"
)
@Component
public class CategoryMapperImpl implements CategoryMapper {

    @Override
    public Category toCategory(CategoryDto categoryDto) {
        if ( categoryDto == null ) {
            return null;
        }

        Category category = new Category();

        category.setId( categoryDto.getId() );
        category.setUuid( categoryDto.getUuid() );
        category.setName( categoryDto.getName() );

        return category;
    }

    @Override
    public CategoryDto toCategoryDto(Category category) {
        if ( category == null ) {
            return null;
        }

        CategoryDto categoryDto = new CategoryDto();

        categoryDto.setId( category.getId() );
        categoryDto.setUuid( category.getUuid() );
        categoryDto.setName( category.getName() );

        return categoryDto;
    }

    @Override
    public List<Category> toCategoryList(List<CategoryDto> categoryDtoList) {
        if ( categoryDtoList == null ) {
            return null;
        }

        List<Category> list = new ArrayList<Category>( categoryDtoList.size() );
        for ( CategoryDto categoryDto : categoryDtoList ) {
            list.add( toCategory( categoryDto ) );
        }

        return list;
    }

    @Override
    public List<CategoryDto> toCategoryDtoList(List<Category> categoryList) {
        if ( categoryList == null ) {
            return null;
        }

        List<CategoryDto> list = new ArrayList<CategoryDto>( categoryList.size() );
        for ( Category category : categoryList ) {
            list.add( toCategoryDto( category ) );
        }

        return list;
    }
}
