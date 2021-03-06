package com.gavial.gavial_api.controller.rest;

import com.gavial.gavial_api.model.Sentence;
import com.gavial.gavial_api.model.Word;
import com.gavial.gavial_api.service.SentenceService;
import com.gavial.gavial_api.service.WordService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/sentence")
public class SentenceController {

        @Autowired
        private SentenceService sentenceService;


    @GetMapping("/reload")
    public void reload(){
        List<Sentence> list = sentenceService.getAll();

        sentenceService.delete();

        for(int i = 0; i < list.size(); i++) {
            list.get(i).setId((long) i);
            sentenceService.edit(list.get(i));
        }
    }
        @GetMapping("/getAll")
        public List<Sentence> getAll() {
            System.out.println("get all sentence");
            return sentenceService.getAll();
        }
        @PostMapping("/edit")
        public Sentence edit(@RequestBody Sentence sentence) {
            System.out.println("update: " + sentence);
            return sentenceService.edit(sentence);
        }
        @PostMapping("/delete")
        public boolean edit(@RequestBody Long id) {
            System.out.println("delete sentence: " + id);
            return sentenceService.delete(id);
        }
    }
