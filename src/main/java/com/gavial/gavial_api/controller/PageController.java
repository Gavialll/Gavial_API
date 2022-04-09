package com.gavial.gavial_api.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class PageController {

    @GetMapping("/")
    public String index(){
        return "index";
    }

    @GetMapping("/index")
    public String indexx(){
        return "index";
    }

    @GetMapping("/sentence")
    public String sentence(){
        return "sentence";
    }

    @GetMapping("/word")
    public String word(){
        return "word";
    }

    @GetMapping("/wordQuiz")
    public String wordQuiz(){
        return "wordQuiz";
    }

    @GetMapping("/chooseSentenceQuiz")
    public String chooseSentenceQuiz(){
        return "chooseSentence";
    }

    @GetMapping("/user")
    public String user(){
        return "user";
    }
    
    @GetMapping("/irregularVerb")
    public String irregularVerb(){
        return "irregularVerb";
    }
}
