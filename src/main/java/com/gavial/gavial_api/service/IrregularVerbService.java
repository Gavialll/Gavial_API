package com.gavial.gavial_api.service;

import com.gavial.gavial_api.model.IrregularVerb;
import com.gavial.gavial_api.model.Sentence;
import com.gavial.gavial_api.repository.IrregularVerbRepository;
import com.gavial.gavial_api.repository.SentenceRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class IrregularVerbService {
    @Autowired
    private IrregularVerbRepository irregularVerbRepository;

    public List<IrregularVerb> getAll(){
        return irregularVerbRepository.findAll();
    }

    public IrregularVerb edit(IrregularVerb irregularVerb){
        return irregularVerbRepository.save(irregularVerb);
    }

    public boolean delete(Long id){
        irregularVerbRepository.deleteById(id);
        return true;
    }
    public boolean delete(){
        irregularVerbRepository.deleteAll();
        return true;
    }
}
