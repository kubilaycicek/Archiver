package com.kubilaycicek.archiver.payload.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class ArchiveDto {
    private Long id;
    private String uuid;
    private String file;
}
