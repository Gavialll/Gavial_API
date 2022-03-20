package com.gavial.gavial_api.service;

import com.gavial.gavial_api.model.Sentence;
import com.gavial.gavial_api.repository.SentenceRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class SentenceService {
    @Autowired
    private SentenceRepository sentenceRepository;

    public List<Sentence> getAll(){
        return sentenceRepository.findAll();
    }

    public Sentence edit(Sentence sentence){
        return sentenceRepository.save(sentence);
    }

    public boolean delete(Long id){
        sentenceRepository.deleteById(id);
        return true;
    }
    public boolean delete(){
        sentenceRepository.deleteAll();
        return true;
    }
}
