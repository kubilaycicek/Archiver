package com.kubilaycicek.archiver.service;

import com.kubilaycicek.archiver.payload.dto.ArchiveDto;
import com.kubilaycicek.archiver.repository.ArchiveRepository;
import lombok.RequiredArgsConstructor;

@RequiredArgsConstructor
public class ArchiveServiceImpl implements ArchiveService {

    private ArchiveRepository archiveRepository;


    @Override
    public void saveArchive(ArchiveDto archiveDto) {

    }

    @Override
    public void deleteArchive(String uuid) {

    }

    @Override
    public void findByUuid(String uuid) {

    }
}
