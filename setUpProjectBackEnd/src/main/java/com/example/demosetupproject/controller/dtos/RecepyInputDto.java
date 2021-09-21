package com.example.demosetupproject.controller.dtos;

import com.example.demosetupproject.model.Recipe;

public class RecepyInputDto {
    public long id;

    String name;
    String time;
    String difficultyRating;
    String description;

    public Recipe toRecepy(){
        var recipe = new Recipe();
        recipe.setId(id);
        recipe.setName(name);
        recipe.setTime(time);
        recipe.setDifficultyRating(difficultyRating);
        recipe.setDescription(description);
        return recipe;
    }
}
