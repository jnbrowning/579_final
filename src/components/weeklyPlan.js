import {useState} from "react";
import './weeklyPlan.css';
import Recipes from "./recipes";
import RecipeEntry from "./recipeEntry";
import WeekHeader from "./weekHeader";
import ReturnToEntry from "./returnToEntry";

const WeeklyPlan = () => {

    //gets recipes from local storage
    let startingRecipes = [];
    if (localStorage.getItem('recipes')) {
        startingRecipes = JSON.parse(localStorage.getItem('recipes'));
    }

    //array of recipe information, initialized with local storage
    const [recipes, addRecipe] = useState(startingRecipes);
    //form shows on page load, once recipes have been commited the form is hidden
    const [showForm, updateShowForm] = useState(true);
    //contains HTML for list items
    const [recipeList, updateRecipes] = useState([]);

    //form for adding new recipes
    if (showForm) {
        return (
            <div>
                <RecipeEntry
                    updateRecipes={updateRecipes}
                    addRecipe={addRecipe}
                    recipes={recipes}
                    updateShowForm={updateShowForm}
                />
            </div>
        );
    }

    //weekly calendar with draggable
    else {
        return (
            <div>
                <WeekHeader/>
                <Recipes
                    recipeList={recipeList}
                    recipes={recipes}
                />
                <ReturnToEntry />
            </div>
        );
    }
}

export default WeeklyPlan;