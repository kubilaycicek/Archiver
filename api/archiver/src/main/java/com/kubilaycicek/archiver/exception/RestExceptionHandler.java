package com.kubilaycicek.archiver.exception;

import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

import javax.persistence.EntityNotFoundException;

@RestControllerAdvice
public class RestExceptionHandler {

    @ExceptionHandler({IllegalArgumentException.class})
    public String illegalArgumentException() {
        return "";
    }

    @ExceptionHandler({EntityNotFoundException.class})
    public String entityNotFoundException() {
        return "";
    }
}
