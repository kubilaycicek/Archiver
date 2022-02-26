package com.kubilaycicek.archiver.payload.request;

import com.kubilaycicek.archiver.payload.dto.CategoryDto;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.validation.Valid;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class CategoryRequest {
    @Valid
    private CategoryDto categoryDto;
}
