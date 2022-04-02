package com.kubilaycicek.archiver.payload.request;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.validation.constraints.NotEmpty;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class GetArchiveListByCategoryRequest {
    @NotEmpty(message = "Category is mandatory")
    private String categoryUuid;
}
