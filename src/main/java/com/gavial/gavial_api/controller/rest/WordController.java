package com.gavial.gavial_api.controller.rest;

import com.gavial.gavial_api.model.Word;
import com.gavial.gavial_api.service.WordService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.io.File;
import java.io.FileReader;
import java.io.IOException;
import java.util.ArrayList;
import java.util.LinkedList;
import java.util.List;

@RestController
@RequestMapping("/api")
public class WordController {
    @Autowired
    private WordService wordService;

    @GetMapping("/reload/word")
    public void reload(){
       wordService.delete();

        File file = new File("/Users/andrijdutko/Desktop/Gavial_API/src/main/java/com/gavial/gavial_api/controller/rest/FileRead.txt");

        List<Word> wordList = new ArrayList<>();
        try(FileReader fileReader = new FileReader(file)) {
            StringBuilder stringBuilder = new StringBuilder();
            int i;
            int count = 0;
            boolean flag = false;
            Word word = new Word();
            do {
                i = fileReader.read();
                stringBuilder.append((char) i);

                if(i == '\n'){

                    if(stringBuilder.toString().contains("en-to-ua.blogspot.com")){
                        stringBuilder = new StringBuilder();
                        continue;
                    }
                    else if(stringBuilder.toString().contains("Сторінка")){
                        stringBuilder = new StringBuilder();
                        continue;
                    }
                    else if(stringBuilder.toString().equals("\n")){
                        stringBuilder = new StringBuilder();
                        continue;
                    }
                    if(flag || stringBuilder.toString().contains("affect")){
                        stringBuilder = new StringBuilder();
                        flag = true;
                        count++;
                        if(count == 2){
                            flag = false;
                            count = 0;
                        }
                        word = new Word();
                        continue;
                    }
                    switch(count){
                        case 0 :{
                            String english = stringBuilder.toString().trim();
                            int index = english.indexOf("(");
                            if(index != -1){
                                english = english.substring(index);
                            }
                            word.setEnglish(english);
                            stringBuilder = new StringBuilder();
                            count++;
                            break;
                        }
                        case 1 :{
                            word.setUkraine(stringBuilder.toString().trim().replaceAll(";", ","));
                            stringBuilder = new StringBuilder();
                            count++;
                            break;
                        }
                        case 2 :{
                            word.setTranscription(stringBuilder.toString().trim());
                            stringBuilder = new StringBuilder();
                            count = 0;
                            wordList.add(word);
                            word = new Word();
                            break;
                        }
                    }
                }
            } while(i != - 1);

//            for(Word words : wordList) {
//                System.out.println(words);
//            }

            for(int j = 0; j < wordList.size(); j++) {
                wordList.get(j).setId((long) j);
                wordService.edit(wordList.get(j));
            }

//            System.out.println(stringBuffer.toString());

        } catch(IOException exception) {
            exception.getMessage();
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
