package com.kubilaycicek.archiver.controller;

import com.kubilaycicek.archiver.payload.request.ArchiveRequest;
import com.kubilaycicek.archiver.payload.request.GetArchiveListByCategoryRequest;
import com.kubilaycicek.archiver.payload.response.ArchiveListResponse;
import com.kubilaycicek.archiver.payload.response.ArchiveResponse;
import com.kubilaycicek.archiver.service.ArchiveService;
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
@RequestMapping("api/v1/archives")
@CrossOrigin(origins = "*", allowedHeaders = "*")
public class ArchiveController {

    private final ArchiveService archiveService;

    @Tag(name = "save archive ")
    @PostMapping(produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<ArchiveResponse> saveArchive(@Valid @RequestBody ArchiveRequest archiveRequest) {
        if (archiveRequest.getArchiveDto() != null) {
            return ResponseEntity.status(HttpStatus.CREATED).body(new ArchiveResponse(archiveService.saveArchive(archiveRequest.getArchiveDto(), archiveRequest.getCategoryUuid())));
        } else {
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }

    }

    @Tag(name = "list of Archive ")
    @GetMapping(value = "/list")
    public ResponseEntity<ArchiveListResponse> getList() {
        return ResponseEntity.ok(new ArchiveListResponse(archiveService.getList()));
    }

    @Tag(name = "List of Archive By Category ")
    @GetMapping(value = "/list/category")
    public ResponseEntity<ArchiveListResponse> getListByCategory(@RequestBody @Valid GetArchiveListByCategoryRequest request) {
        return ResponseEntity.ok(new ArchiveListResponse(archiveService.getListByCategory(request.getCategoryUuid())));
    }

    @Tag(name = "delete Archive ")
    @DeleteMapping(value = "/{uuid}", produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<?> removeArchiveByUuid(@RequestBody @PathVariable String uuid) {
        archiveService.deleteArchive(uuid);
        return new ResponseEntity<>(HttpStatus.OK);
    }

}