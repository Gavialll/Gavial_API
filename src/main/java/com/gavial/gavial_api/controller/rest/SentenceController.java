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

        @GetMapping("/getAll")
        public List<Sentence> getAll() {
            return sentenceService.getAll();
        }
        @PostMapping("/edit")
        public boolean edit(@RequestBody Sentence sentence) {
            return sentenceService.edit(sentence);
        }
        @PostMapping("/delete")
        public boolean edit(@RequestBody Long id) {
            return sentenceService.delete(id);
        }
    }