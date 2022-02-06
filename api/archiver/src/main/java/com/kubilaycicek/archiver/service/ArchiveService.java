package com.kubilaycicek.archiver.service;

import com.kubilaycicek.archiver.payload.dto.ArchiveDto;

public interface ArchiveService {
    void saveArchive(ArchiveDto archiveDto);
    void deleteArchive(String uuid);
    void findByUuid(String uuid);
}
