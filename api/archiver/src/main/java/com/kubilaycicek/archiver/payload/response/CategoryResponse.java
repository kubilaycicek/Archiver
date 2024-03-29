package com.kubilaycicek.archiver.payload.response;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.kubilaycicek.archiver.payload.dto.CategoryDto;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class CategoryResponse {
    @JsonProperty("category")
    CategoryDto categoryDto;
}
