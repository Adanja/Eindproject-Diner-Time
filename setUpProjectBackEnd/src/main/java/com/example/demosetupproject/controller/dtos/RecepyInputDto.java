package com.example.demosetupproject.controller.dtos;

import com.example.demosetupproject.model.Recipe;

public class RecepyInputDto {
    public long id;

    String name;
    String time;
    String difficultyRating;
    String description;

    public Recipe toRecepy(){
        var recepy = new Recipe();
        recepy.setId(id);
        recepy.setName(name);
        recepy.setTime(time);
        recepy.setDifficultyRating(difficultyRating);
        recepy.setDescription(description);
        return recepy;
    }
}
