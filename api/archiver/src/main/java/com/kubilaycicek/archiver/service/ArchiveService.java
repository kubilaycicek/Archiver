package com.kubilaycicek.archiver.service;

import com.kubilaycicek.archiver.payload.dto.ArchiveDto;

import java.util.List;
import java.util.Optional;

public interface ArchiveService {
    ArchiveDto saveArchive(ArchiveDto archiveDto);
    void deleteArchive(String uuid);
    List<ArchiveDto> getList();
    Optional<ArchiveDto> findByUuid(String uuid);
}