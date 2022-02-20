package com.gavial.gavial_api.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class PageController {

    @GetMapping("/exchange/getExchange")
    public String index(){
        return "PWA/exchange/exchange";
    }
    @GetMapping("/exchange/getHistory")
    public String indexe(){
        return "PWA/exchange/history";
    }
}
