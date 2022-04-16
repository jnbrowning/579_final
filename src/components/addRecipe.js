import FormRecipesList from "./formRecipesList";
import RecipeForm from "./recipeForm";
import WeeklyScheduleButton from "./weeklyScheduleButton";

const AddRecipe = (props) => {
    //show list of saved recipes, form to add new recipes, and button to go to weekly view
    return (
            <>
                <FormRecipesList addRecipe={props.addRecipe} recipes={props.recipes}/>
                <RecipeForm recipes={props.recipes} addRecipe={props.addRecipe} />
                <WeeklyScheduleButton updateShowForm={props.updateShowForm} recipes={props.recipes} updateRecipes={props.updateRecipes} />
            </>
    )
}

export default AddRecipe;