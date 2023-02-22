package com.kubilaycicek.archiver.kafka.broker.producer;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.kafka.core.KafkaTemplate;
import org.springframework.stereotype.Service;

@Slf4j
@Service
@RequiredArgsConstructor
public class TopicProducerImpl implements TopicProducer {

    @Value("${spring.kafka.topics}")
    private  String topicName;

    private final KafkaTemplate<String, String> kafkaTemplate;
    @Override
    public void send(String message) {
        log.info("Payload : {}",  message);
        kafkaTemplate.send(topicName, message);
    }
}
