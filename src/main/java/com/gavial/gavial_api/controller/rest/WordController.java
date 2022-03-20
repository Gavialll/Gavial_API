package com.gavial.gavial_api.controller.rest;

import com.gavial.gavial_api.model.Word;
import com.gavial.gavial_api.service.WordService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("/api")
public class WordController {
    @Autowired
    private WordService wordService;

    @GetMapping("/reload/word")
    public void reload(){
       List<Word> list = wordService.getAll();

       wordService.delete();

        for(int i = 0; i < list.size(); i++) {
            list.get(i).setId((long) i);
            wordService.edit(list.get(i));
        }
    }

    @GetMapping("/getAll")
    public List<Word> getAll() {
        System.out.println("get all words");
        return wordService.getAll();
    }

    @PostMapping("/edit")
    public Word edit(@RequestBody Word word) {
        System.out.println("uprate: " + word);
        return wordService.edit(word);
    }
    @PostMapping("/delete")
    public boolean edit(@RequestBody Long id) {
        System.out.println("delete word: " + id);
        return wordService.delete(id);
    }
}
