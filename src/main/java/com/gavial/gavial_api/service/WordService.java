package com.gavial.gavial_api.service;

import com.gavial.gavial_api.model.Word;
import com.gavial.gavial_api.repository.WordRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class WordService {
    @Autowired
    private WordRepository wordRepository;

    public List<Word> getAll(){
        return wordRepository.findAll();
    }

    public boolean edit(Word word){

        System.out.println(wordRepository.save(word));
        return true;
    }

    public boolean delete(Long id){
        wordRepository.deleteById(id);
        return true;
    }

    public boolean delete(){
        wordRepository.deleteAll();
        return true;
    }
}
