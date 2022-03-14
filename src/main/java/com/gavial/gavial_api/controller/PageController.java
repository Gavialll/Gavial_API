package com.gavial.gavial_api.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class PageController {

    @GetMapping("/")
    public String index(){
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
}
