package com.kubilaycicek.archiver.repository;

import com.kubilaycicek.archiver.payload.model.Archive;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface ArchiveRepository extends JpaRepository<Archive, Long> {
    Optional<Archive> findByUuid(String uuid);

    @Query(value = "select a from Archive a inner join Category c on c.uuid = a.category.uuid where c.uuid=:category")
    List<Archive> findAllByCategoryUuid(String category);
}