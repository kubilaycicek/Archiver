package com.kubilaycicek.archiver.mapper;

import com.kubilaycicek.archiver.payload.dto.ArchiveDto;
import com.kubilaycicek.archiver.payload.model.Archive;
import org.mapstruct.IterableMapping;
import org.mapstruct.Mapper;
import org.mapstruct.Named;

import java.util.List;

@Mapper(componentModel = "spring")
public interface ArchiveMapper {

    @Named("toArchive")
    Archive toArchive(ArchiveDto archiveDto);

    @Named("toArchiveDto")
    ArchiveDto toArchiveDtoList(Archive archive);

    @IterableMapping(qualifiedByName = "toArchive")
    List<Archive> toArchiveList(List<ArchiveDto> archiveDtoList);

    @IterableMapping(qualifiedByName = "toArchiveDto")
    List<ArchiveDto> toArchiveDtoList(List<Archive> archiveDtoList);
}
