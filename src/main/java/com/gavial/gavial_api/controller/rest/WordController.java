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

    @GetMapping("/getAll")
    public List<Word> getAll() {
        return wordService.getAll();
    }
    @PostMapping("/edit")
    public boolean edit(@RequestBody Word word) {
        System.out.println(word);
        return wordService.edit(word);
    }
    @PostMapping("/delete")
    public boolean edit(@RequestBody Long id) {
        return wordService.delete(id);
    }
}
