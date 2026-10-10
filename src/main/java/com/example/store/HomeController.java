package com.example.store;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class HomeController{
    @RequestMapping("/products")
    public String index(){
        return "index.html";
    }
}