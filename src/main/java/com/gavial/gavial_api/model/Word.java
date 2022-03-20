package com.gavial.gavial_api.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
@Data
@AllArgsConstructor
public class Word {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    private String ukraine;
    private String english;

    @Override
    public String toString() {
        return "Word{" + "id=" + id + ", ukraine='" + ukraine + '\'' + ", english='" + english + '\'' + '}';
    }

    public Word() {
    }
}
