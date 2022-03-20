package com.gavial.gavial_api.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
@AllArgsConstructor
@NoArgsConstructor
@Data
public class IrregularVerb {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    private String past;
    private String present;
    private String future;
    private String ukraine;
}
