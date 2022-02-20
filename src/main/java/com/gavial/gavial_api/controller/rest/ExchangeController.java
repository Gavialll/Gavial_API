package com.gavial.gavial_api.controller.rest;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.io.InputStream;
import java.net.HttpURLConnection;
import java.net.URL;
import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.Locale;
import java.util.Scanner;

@RestController
@RequestMapping("/api")
public class ExchangeController {

    @GetMapping("/exchange")
    public String getExchange(){
        try{
            String str;
            Date localDate = new Date();
            DateFormat dateFormat = new SimpleDateFormat("dd.MM.yyyy", Locale.getDefault());

            String dateText = dateFormat.format(localDate);
            str = "https://api.privatbank.ua/p24api/exchange_rates?json&date=" + "20.02.2022";

            URL obj = new URL(str);
            HttpURLConnection con = (HttpURLConnection) obj.openConnection();
            con.setRequestMethod("GET");
            InputStream response = con.getInputStream();
            Scanner s = new Scanner(response).useDelimiter("\\A");

            return s.hasNext() ? s.next() : "";
        }
        catch (Exception e) {
            System.out.println(e.getMessage());
        }
        return null;
    }
}
