package com.kubilaycicek.archiver.service;

import com.kubilaycicek.archiver.exception.ArchiveNotFoundException;
import com.kubilaycicek.archiver.exception.CategoryNotFoundException;
import com.kubilaycicek.archiver.mapper.ArchiveMapper;
import com.kubilaycicek.archiver.payload.dto.ArchiveDto;
import com.kubilaycicek.archiver.payload.model.Archive;
import com.kubilaycicek.archiver.payload.model.Category;
import com.kubilaycicek.archiver.repository.ArchiveRepository;
import com.kubilaycicek.archiver.repository.CategoryRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.UUID;


@RequiredArgsConstructor
@Service
public class ArchiveServiceImpl implements ArchiveService {

    private final ArchiveMapper archiveMapper;
    private final ArchiveRepository archiveRepository;
    private final CategoryRepository categoryRepository;

    @Override
    public ArchiveDto saveArchive(ArchiveDto archiveDto, String categoryUuid) {

        Archive archive = archiveMapper.toArchive(archiveDto);
        archive.setUuid(UUID.randomUUID().toString());
        Optional<Category> categoryDb = Optional.ofNullable(categoryRepository.findByUuid(categoryUuid).orElseThrow(() -> new CategoryNotFoundException("Uuid+" + categoryUuid + "not found")));
        if (categoryDb.isPresent()) {
            archive.setCategory(categoryDb.get());
        }

        return archiveMapper.toArchiveDto(archiveRepository.save(archive));
    }

    @Override
    public void deleteArchive(String uuid) {
        Optional<Archive> archiveDb = Optional.ofNullable(archiveRepository.findByUuid(uuid).orElseThrow(() -> new ArchiveNotFoundException("Archive : " + uuid + " not found.")));
        if (archiveDb.isPresent()) {
            archiveRepository.delete(archiveDb.get());
        }
    }

    @Override
    public List<ArchiveDto> getList() {
        return archiveMapper.toArchiveDtoList(archiveRepository.findAll());
    }

    @Override
    public Optional<ArchiveDto> findByUuid(String uuid) {
        return Optional.ofNullable(archiveMapper.toArchiveDto(archiveRepository.findByUuid(uuid).orElseThrow(() -> new ArchiveNotFoundException("Archive : " + uuid + " not found."))));
    }
}