package com.kubilaycicek.archiver.exception;

import com.kubilaycicek.archiver.payload.response.ErrorResponse;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.ObjectError;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestControllerAdvice;
import org.springframework.web.context.request.WebRequest;
import org.springframework.web.servlet.mvc.method.annotation.ResponseEntityExceptionHandler;

import javax.persistence.EntityNotFoundException;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

@Slf4j
@RestControllerAdvice
public class RestExceptionHandler extends ResponseEntityExceptionHandler {


    @ExceptionHandler({CategoryNotFoundException.class, ArchiveNotFoundException.class})
    public ResponseEntity<ErrorResponse> handleAllExceptions(Exception ex, HttpStatus status, WebRequest request) {
        List<String> details = new ArrayList<>();
        details.add(ex.getLocalizedMessage());
        log.error(ex.getLocalizedMessage());
        return new ResponseEntity<>(new ErrorResponse(status.value(), status, details, LocalDateTime.now()), HttpStatus.INTERNAL_SERVER_ERROR);
    }


    @Override
    protected ResponseEntity<Object> handleMethodArgumentNotValid(MethodArgumentNotValidException ex, HttpHeaders headers, HttpStatus status, WebRequest request) {
        List<String> details = new ArrayList<>();
        StringBuilder stringBuilder = new StringBuilder();
        for (ObjectError error : ex.getBindingResult().getAllErrors()) {
            details.add(error.getDefaultMessage());
            stringBuilder.append(error.getDefaultMessage());
        }
        log.error(stringBuilder.toString());
        return new ResponseEntity<>(new ErrorResponse(status.value(), status, details, LocalDateTime.now()), HttpStatus.NOT_FOUND);
    }

}