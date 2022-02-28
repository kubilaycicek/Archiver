package com.kubilaycicek.archiver.controller;

import com.kubilaycicek.archiver.payload.request.ArchiveRequest;
import com.kubilaycicek.archiver.payload.request.CategoryRequest;
import com.kubilaycicek.archiver.payload.response.ArchiveResponse;
import com.kubilaycicek.archiver.payload.response.CategoryListResponse;
import com.kubilaycicek.archiver.payload.response.CategoryResponse;
import com.kubilaycicek.archiver.service.CategoryService;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;
import org.springframework.cache.annotation.Cacheable;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;

@RestController
@RequiredArgsConstructor
@RequestMapping("api/v1/categories")
@CrossOrigin(origins = "*", allowedHeaders = "*")
public class CategoryController {

    private final CategoryService categoryService;

    @Tag(name = "list of Category ")
    @Cacheable(value = "cacheListOfCategory")
    @GetMapping(value = "/list")
    public ResponseEntity<CategoryListResponse> getList() {
        return ResponseEntity.ok(new CategoryListResponse(categoryService.getList()));
    }

    @Tag(name = "save category ")
    @PostMapping(produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<CategoryResponse> saveArchive(@Valid @RequestBody CategoryRequest categoryRequest) {
        if (categoryRequest.getCategoryDto() != null) {
            return ResponseEntity.ok(new CategoryResponse(categoryService.saveCategory(categoryRequest.getCategoryDto())));
        } else {
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }

    }
}