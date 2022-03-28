package com.kubilaycicek.archiver.interceptor;

import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.web.servlet.HandlerInterceptor;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.time.LocalDateTime;
import java.util.stream.Collectors;

@Slf4j
public class RequestHandlerInterceptor implements HandlerInterceptor {
    @Override
    public boolean preHandle(HttpServletRequest request, HttpServletResponse response, Object handler) throws Exception {

        /*
        String currentContentType = request.getContentType();
        if (!currentContentType.equals(MediaType.APPLICATION_JSON_VALUE)) {

            StringBuilder errorStringBuilder = new StringBuilder();
            errorStringBuilder.append("URI : " + request.getRequestURI())
                    .append("Content Type : " + request.getContentType())
                    .append("Time : " + LocalDateTime.now())
                    .append("Request Body : " + request.getReader().lines().collect(Collectors.joining(System.lineSeparator())));


            log.error(errorStringBuilder.toString());

            int statusCode = HttpStatus.UNSUPPORTED_MEDIA_TYPE.value();
            response.setStatus(statusCode);
            response.sendError(statusCode, errorStringBuilder.toString());

            throw new Exception(errorStringBuilder.toString());

        }
       */
        return true;
    }
}