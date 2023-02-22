package com.kubilaycicek.archiver.kafka.broker.producer;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;


public interface TopicProducer {
    void send(String message);
}
