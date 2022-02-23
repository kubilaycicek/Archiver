package com.kubilaycicek.archiver.controller;

import com.kubilaycicek.archiver.payload.dto.ArchiveDto;
import com.kubilaycicek.archiver.payload.request.ArchiveRequest;
import com.kubilaycicek.archiver.service.ArchiveService;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;
import org.springframework.cache.annotation.CacheEvict;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping("api/v1/archive")
@CrossOrigin(origins = "*", allowedHeaders = "*")
public class ArchiveController {

    private final ArchiveService archiveService;

    @Tag(name = "save archive ")
    @PostMapping(value = "/add", produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<?> saveArchive(@Valid @RequestBody ArchiveRequest archiveRequest) {
        if (archiveRequest.getArchiveDto() != null) {
            return ResponseEntity.ok(archiveService.saveArchive(archiveRequest.getArchiveDto()));
        } else {
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }

    }

    @Tag(name = "list of Archive ")
    @CacheEvict(value = "cacheListOfArchive")
    @GetMapping(value = "/list")
    public ResponseEntity<List<ArchiveDto>> getList() {
        return ResponseEntity.ok(archiveService.getList());
    }

    @Tag(name = "delete Archive ")
    @PostMapping(value = "/delete/{uuid}", produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<?> removeArchiveByUuid(@RequestBody @PathVariable String uuid) {
        archiveService.deleteArchive(uuid);
        return new ResponseEntity<>(HttpStatus.OK);
    }

}