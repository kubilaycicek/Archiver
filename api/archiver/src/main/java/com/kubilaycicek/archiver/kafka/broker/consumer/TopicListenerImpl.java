package com.kubilaycicek.archiver.kafka.broker.consumer;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.apache.kafka.clients.consumer.ConsumerRecord;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.kafka.annotation.KafkaListener;
import org.springframework.stereotype.Component;

@Slf4j
@RequiredArgsConstructor
@Component
public class TopicListenerImpl implements TopicListener {

    @Value("$${spring.kafka.topics}")
    private String topicName;

    @KafkaListener(topics = "${spring.kafka.topics}", groupId = "group_id")
    @Override
    public void listen(ConsumerRecord<String, String> payload) {
        log.info("Topic: {}", topicName);
        log.info("key: {}", payload.key());
        log.info("Headers: {}", payload.headers());
        log.info("Partition: {}", payload.partition());
        log.info("Order: {}", payload.value());
    }
}
