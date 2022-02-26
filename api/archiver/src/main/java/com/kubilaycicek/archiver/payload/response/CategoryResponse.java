package com.kubilaycicek.archiver.payload.response;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.kubilaycicek.archiver.payload.dto.CategoryDto;

public class CategoryResponse {
    @JsonProperty(namespace = "category")
    private CategoryDto categoryDto;
}
