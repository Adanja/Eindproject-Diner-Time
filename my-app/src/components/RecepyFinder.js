import React from 'react';
import axios from 'axios';
function RecepyFinder(props) {
    let options = {
        method: 'GET',
        url: 'https://webknox-recipes.p.rapidapi.com/recipes/search',
        params: {
            query: 'burger',
            offset: '0',
            number: '10',
            type: 'main course',
            cuisine: 'italian',
            diet: 'vegetarian',
            intolerances: 'egg, gluten',
            excludeIngredients: 'coconut'
        },
        headers: {
            'x-rapidapi-key': 'ac512a659bmsh7964271db9ee8fap103458jsn71c90d71ac4a',
            'x-rapidapi-host': 'webknox-recipes.p.rapidapi.com'
        }
    };

    axios.request(options).then(function (response) {
        console.log(response.data);
    }).catch(function (error) {
        console.error(error);
    });
    return (
        <div></div>
    );
}

export default RecepyFinder;