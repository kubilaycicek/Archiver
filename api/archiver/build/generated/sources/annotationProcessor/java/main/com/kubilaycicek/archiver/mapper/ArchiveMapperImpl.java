package com.kubilaycicek.archiver.mapper;

import com.kubilaycicek.archiver.payload.dto.ArchiveDto;
import com.kubilaycicek.archiver.payload.model.Archive;
import java.util.ArrayList;
import java.util.List;
import javax.annotation.processing.Generated;
import org.springframework.stereotype.Component;

@Generated(
    value = "org.mapstruct.ap.MappingProcessor",
    date = "2022-02-26T20:37:22+0300",
    comments = "version: 1.4.2.Final, compiler: IncrementalProcessingEnvironment from gradle-language-java-7.3.3.jar, environment: Java 11.0.12 (Oracle Corporation)"
)
@Component
public class ArchiveMapperImpl implements ArchiveMapper {

    @Override
    public Archive toArchive(ArchiveDto archiveDto) {
        if ( archiveDto == null ) {
            return null;
        }

        Archive archive = new Archive();

        archive.setId( archiveDto.getId() );
        archive.setUuid( archiveDto.getUuid() );
        archive.setFile( archiveDto.getFile() );

        return archive;
    }

    @Override
    public ArchiveDto toArchiveDto(Archive archive) {
        if ( archive == null ) {
            return null;
        }

        ArchiveDto archiveDto = new ArchiveDto();

        archiveDto.setId( archive.getId() );
        archiveDto.setUuid( archive.getUuid() );
        archiveDto.setFile( archive.getFile() );

        return archiveDto;
    }

    @Override
    public List<Archive> toArchiveList(List<ArchiveDto> archiveDtoList) {
        if ( archiveDtoList == null ) {
            return null;
        }

        List<Archive> list = new ArrayList<Archive>( archiveDtoList.size() );
        for ( ArchiveDto archiveDto : archiveDtoList ) {
            list.add( toArchive( archiveDto ) );
        }

        return list;
    }

    @Override
    public List<ArchiveDto> toArchiveDtoList(List<Archive> archiveDtoList) {
        if ( archiveDtoList == null ) {
            return null;
        }

        List<ArchiveDto> list = new ArrayList<ArchiveDto>( archiveDtoList.size() );
        for ( Archive archive : archiveDtoList ) {
            list.add( toArchiveDto( archive ) );
        }

        return list;
    }
}
