package com.kubilaycicek.archiver.kafka.broker.consumer;

import org.apache.kafka.clients.consumer.ConsumerRecord;

import java.util.function.Consumer;

public interface TopicListener {
    public void listen(ConsumerRecord<String, String> payload);
}
