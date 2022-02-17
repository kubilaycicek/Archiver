package com.kubilaycicek.archiver.payload.request;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.kubilaycicek.archiver.payload.dto.ArchiveDto;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class ArchiveRequest {
    private ArchiveDto archiveDto;
}
