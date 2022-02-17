package com.kubilaycicek.archiver.controller;

import com.kubilaycicek.archiver.payload.dto.ArchiveDto;
import com.kubilaycicek.archiver.payload.request.ArchiveRequest;
import com.kubilaycicek.archiver.service.ArchiveService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@RestController
@RequiredArgsConstructor
@RequestMapping("api/v1/archive")
public class ArchiveController {

    private final ArchiveService archiveService;

    @PostMapping(value = "/add", produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<ArchiveDto> saveArchive(@RequestBody ArchiveRequest archiveRequest) {
        if (archiveRequest.getArchiveDto() != null) {
            return ResponseEntity.ok(archiveService.saveArchive(archiveRequest.getArchiveDto()));
        } else {
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }
    }

    @GetMapping(value = "/list")
    public ResponseEntity<List<ArchiveDto>> getList() {
        return ResponseEntity.ok(archiveService.getList());
    }

    @PostMapping(value = "/delete/{uuid}", produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<?> removeArchiveByUuid(@RequestBody @PathVariable String uuid) {
        archiveService.deleteArchive(uuid);
        return new ResponseEntity<>(HttpStatus.OK);
    }

}