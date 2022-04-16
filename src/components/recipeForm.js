import './recipeForm.css'

import {useState, useEffect} from "react";

const RecipeForm = (props) => {
    const [recipeName, setRecipe] = useState('');
    const [recipePic, setPic] = useState('');
    const [recipeUrl, setUrl] = useState('');

    useEffect(() => {
        localStorage.setItem('recipes', JSON.stringify(props.recipes));
    }, [props.recipes]);

    const updateRecipes = (e) => {
        e.preventDefault();
        props.addRecipe((currentRecipes) => {
            return [
                ...currentRecipes,
                {
                    name: recipeName,
                    pic: recipePic,
                    recipe: recipeUrl,
                },
            ]
        })
        setRecipe('');
        setPic('');
        setUrl('');
        console.log(props.recipes);
    }

    return(
        <>
            <h2>Add New Recipe</h2>
            <form>
                <label>Recipe Name:</label>
                <input
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