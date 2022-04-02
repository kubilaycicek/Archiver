package com.kubilaycicek.archiver.exception;

import javax.persistence.EntityNotFoundException;

public class ArchiveNotFoundException extends EntityNotFoundException {
    public ArchiveNotFoundException(String message) {
        super(message);
    }
}