package com.kubilaycicek.archiver.payload.response;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.kubilaycicek.archiver.payload.dto.CategoryDto;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class CategoryListResponse {
    @JsonProperty(namespace = "category")
    private List<CategoryDto> categoryList;
}
