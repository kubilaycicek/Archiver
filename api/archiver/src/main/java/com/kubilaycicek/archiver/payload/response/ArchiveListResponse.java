package com.kubilaycicek.archiver.payload.response;


import com.fasterxml.jackson.annotation.JsonProperty;
import com.kubilaycicek.archiver.payload.dto.ArchiveDto;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class ArchiveListResponse {
    @JsonProperty(namespace = "archiveList")
    private List<ArchiveDto> archiveList;
}
