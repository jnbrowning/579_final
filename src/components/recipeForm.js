import './recipeForm.css'

import {useState, useEffect} from "react";

const RecipeForm = (props) => {

    //recipe name for form input
    const [recipeName, setRecipe] = useState('');
    //recipe picture url for form input
    const [recipePic, setPic] = useState('');
    //recipe url for form input
    const [recipeUrl, setUrl] = useState('');

    //sets local storage when recipes gets updated
    useEffect(() => {
        localStorage.setItem('recipes', JSON.stringify(props.recipes));
    }, [props.recipes]);

    //adds recipe from form
    const updateRecipes = (e) => {
        e.preventDefault();
        props.addRecipe((currentRecipes) => {
            return [
                ...currentRecipes,
                {
                    name: recipeName,
                    pic: recipePic,
                    recipe_url: recipeUrl,
                },
            ]
        })
        setRecipe('');
        setPic('');
        setUrl('');
        console.log(props.recipes);
    }

    //form for inputting new recipes
    return(
        <>
            <h2 className='formHeader'>ADD NEW RECIPE</h2>
            <form>
                <label>Recipe Name:</label>
                <input
                    className='recipeInput'
                    type='text'
                    value={recipeName}
                    onChange={(e) => setRecipe(e.target.value)}
                />
                <label>Image Url:</label>
                <input
                    type='url'
                    value={recipePic}
                    onChange={(e) => setPic(e.target.value)}
                />
                <label>Recipe Url:</label>
                <input
                    type='url'
                    value={recipeUrl}
                    onChange={(e) => setUrl(e.target.value)}
                />
                <button className='addRecipeButton' onClick={updateRecipes}>Add Recipe</button>
            </form>
        </>
    );
}

export default RecipeForm;