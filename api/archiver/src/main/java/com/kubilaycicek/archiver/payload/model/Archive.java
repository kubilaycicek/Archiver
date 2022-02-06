package com.kubilaycicek.archiver.payload.model;

import lombok.Data;

import javax.persistence.*;

@Data
@Entity
@Table(name = "Archive")
public class Archive {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "id")
    private Long id;
    @Column(name = "uuid")
    private String uuid;
    @Column(name = "file")
    private String file;
}
