package com.gavial.gavial_api.controller.rest;

import com.gavial.gavial_api.model.IrregularVerb;
import com.gavial.gavial_api.model.Sentence;
import com.gavial.gavial_api.service.IrregularVerbService;
import com.gavial.gavial_api.service.SentenceService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/irregularVerb")
public class IrregularVerbController {

        @Autowired
        private IrregularVerbService irregularVerbService;


        @GetMapping("/reload")
        public void reload(){
            List<IrregularVerb> list = irregularVerbService.getAll();

            irregularVerbService.delete();

            for(int i = 0; i < list.size(); i++) {
                list.get(i).setId((long) i);
                irregularVerbService.edit(list.get(i));
            }
        }

        @GetMapping("/getAll")
        public List<IrregularVerb> getAll() {
            System.out.println("get all sentence");
            return irregularVerbService.getAll();
        }

        @PostMapping("/edit")
        public IrregularVerb edit(@RequestBody IrregularVerb irregularVerb) {
            System.out.println("update: " + irregularVerb);
            return irregularVerbService.edit(irregularVerb);
        }

        @PostMapping("/delete")
        public boolean edit(@RequestBody Long id) {
            System.out.println("delete sentence: " + id);
            return irregularVerbService.delete(id);
        }
    }
