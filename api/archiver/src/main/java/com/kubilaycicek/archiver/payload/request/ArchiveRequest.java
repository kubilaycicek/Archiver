package com.kubilaycicek.archiver.payload.request;

import com.kubilaycicek.archiver.payload.dto.ArchiveDto;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.validation.Valid;
import java.io.Serializable;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class ArchiveRequest implements Serializable {
    @Valid
    private ArchiveDto archiveDto;
}
