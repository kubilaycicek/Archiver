package com.kubilaycicek.archiver.configuration;

import lombok.extern.slf4j.Slf4j;
import org.springframework.cache.annotation.CacheEvict;
import org.springframework.context.annotation.Configuration;
import org.springframework.scheduling.annotation.EnableScheduling;
import org.springframework.scheduling.annotation.Scheduled;

@Slf4j
@Configuration
@EnableScheduling
public class CacheConfiguration {
    @CacheEvict(value = "cacheListOfArchive", allEntries = true)
    @Scheduled(fixedRate = 60 * 1000)
    public void removeFindAllMetrics() {
        log.error("Cache cleaned");
    }
}