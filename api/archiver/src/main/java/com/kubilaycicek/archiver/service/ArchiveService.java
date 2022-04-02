package com.kubilaycicek.archiver.service;

import com.kubilaycicek.archiver.payload.dto.ArchiveDto;

import java.util.List;
import java.util.Optional;

public interface ArchiveService {
    ArchiveDto saveArchive(ArchiveDto archiveDto,String categoryUuid);
    void deleteArchive(String uuid);
    List<ArchiveDto> getList();
    List<ArchiveDto> getListByCategory(String categoryUuid);
    Optional<ArchiveDto> findByUuid(String uuid);
}