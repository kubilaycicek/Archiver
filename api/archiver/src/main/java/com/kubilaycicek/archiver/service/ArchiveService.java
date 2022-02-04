package com.kubilaycicek.archiver.service;

public interface ArchiveService {
    void save();
    void delete();
    void findByUuid(String uuid);
}
