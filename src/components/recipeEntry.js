import EnteredRecipes from "./enteredRecipes";
import RecipeForm from "./recipeForm";
import WeeklyPlanButton from "./weeklyPlanButton";

const RecipeEntry = (props) => {
    //show list of saved recipes, form to add new recipes, and button to go to weekly view
    return (
            <>
                <EnteredRecipes addRecipe={props.addRecipe} recipes={props.recipes}/>
                <RecipeForm recipes={props.recipes} addRecipe={props.addRecipe} />
                <WeeklyPlanButton updateShowForm={props.updateShowForm} recipes={props.recipes} updateRecipes={props.updateRecipes} />
            </>
    )
}

export default RecipeEntry;