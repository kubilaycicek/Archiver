package com.kubilaycicek.archiver.controller;

import com.kubilaycicek.archiver.payload.request.ArchiveRequest;
import com.kubilaycicek.archiver.payload.response.ArchiveResponse;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
public class ArchiveController {

    @PostMapping
    public ResponseEntity<?> saveArchive(@RequestBody ArchiveRequest archiveRequest){
        return ResponseEntity.ok(new ArchiveResponse());
    }

    @GetMapping(value = "/list")
    public ResponseEntity<?> getList(@RequestBody ArchiveRequest archiveRequest){
        return ResponseEntity.ok(new ArchiveResponse());
    }

    @PostMapping(value = "/delete")
    public ResponseEntity<?> removeArchiveByUuid(@RequestBody String uuid){
        return ResponseEntity.ok(new ArchiveResponse());
    }

}