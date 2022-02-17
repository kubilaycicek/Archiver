package com.kubilaycicek.archiver.repository;

import com.kubilaycicek.archiver.payload.model.Archive;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface ArchiveRepository extends JpaRepository<Archive, Long> {
    Optional<Archive> findByUuid(String uuid);
}