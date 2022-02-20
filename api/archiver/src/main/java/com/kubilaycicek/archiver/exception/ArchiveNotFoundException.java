package com.kubilaycicek.archiver.exception;

public class ArchiveNotFoundException extends RuntimeException {
    public ArchiveNotFoundException(String message) {
        super(message);
    }
}