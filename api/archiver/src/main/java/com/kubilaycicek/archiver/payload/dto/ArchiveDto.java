package com.kubilaycicek.archiver.payload.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.validation.constraints.NotEmpty;
import java.io.Serializable;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class ArchiveDto  implements Serializable {
    private Long id;
    private String uuid;
    @NotEmpty(message = "File is mandatory")
    private String file;
}
