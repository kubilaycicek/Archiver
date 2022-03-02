package com.kubilaycicek.archiver.configuration;

import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.cache.CacheManager;
import org.springframework.cache.annotation.CacheEvict;
import org.springframework.context.annotation.Configuration;
import org.springframework.scheduling.annotation.EnableScheduling;
import org.springframework.scheduling.annotation.Scheduled;

@Slf4j
@Configuration
@EnableScheduling
public class CacheConfiguration {

    @Autowired
    CacheManager cacheManager;

    @CacheEvict(value = "cacheListOfArchive", allEntries = true)
    @Scheduled(fixedRate = 24 * 60 * 60 * 1000)
    public void removeCacheOfArchive() {
        log.info("Cache cleaned");
    }

    @CacheEvict(value = "cacheListOfCategory", allEntries = true)
    @Scheduled(fixedRate = 24 * 60 * 60 * 1000)
    public void removeCacheOfCategory() {
        log.info("Cache cleaned");
    }


    @Scheduled(fixedRate = 24 * 60 * 60 * 1000)
    public void evictAllCaches() {
        cacheManager.getCacheNames().stream()
                .forEach(cacheName -> cacheManager.getCache(cacheName).clear());
    }
}