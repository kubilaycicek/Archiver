package com.kubilaycicek.archiver.payload.request;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.kubilaycicek.archiver.payload.dto.ArchiveDto;
import lombok.Data;

@Data
public class ArchiveRequest {
    @JsonProperty(namespace = "archive")
    private ArchiveDto archiveDto;
}
