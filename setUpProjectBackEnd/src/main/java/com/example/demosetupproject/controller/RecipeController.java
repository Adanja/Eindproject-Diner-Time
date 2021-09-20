package com.example.demosetupproject.controller;

import com.example.demosetupproject.controller.dtos.RecipeDto;
import com.example.demosetupproject.controller.dtos.RecepyInputDto;
import com.example.demosetupproject.model.Recipe;
import com.example.demosetupproject.service.RecipeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("recepies")
public class RecipeController {
    private final RecipeService recipeService;

    @Autowired
    public RecipeController(RecipeService recipeService){
        this.recipeService = recipeService;
    }

    @GetMapping
    public List<RecipeDto> getAllRecepies() {
        var dtos = new ArrayList<RecipeDto>();
        var recipes = recipeService.getAllRecipes();
        for (Recipe recipe :recipes) {
            dtos.add(RecipeDto.fromRecepy(recipe));
        }
        return dtos;
    }

    @GetMapping("/{id}")
    public RecipeDto getRecepy(@PathVariable("id") Long id) {
        var recipe = recipeService.getRecipe(id);
        return RecipeDto.fromRecepy(recipe);
    }

    @PostMapping
    public RecipeDto saveRecepy(@RequestBody RecepyInputDto dto) {
        var recipe = dto.toRecepy();
        var harry = recipeService.saveRecipe(recipe);
        return RecipeDto.fromRecepy(harry);
    }

    @PutMapping("/{id}")
    public RecipeDto updateRecepy(@PathVariable("id") Long id, @RequestBody Recipe recipe) {
        recipeService.updateRecipe(id, recipe);
        return RecipeDto.fromRecepy(recipe);
    }

    @DeleteMapping("/{id}")
    public void deleteRecepy(@PathVariable ("id")Long id) {
        recipeService.deleteRecipe(id);
    }

}
