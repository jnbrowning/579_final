import {useState} from 'react';

const AddRecipe = (props) => {
    const [recipeName, setRecipe] = useState('');
    const [recipePic, setPic] = useState('');

    const updateRecipes = (e) => {
        e.preventDefault();
        props.addRecipe((currentRecipes) => {
            return [
                ...currentRecipes,
                {
                    name: recipeName,
                    pic: recipePic,
                },
            ]
        })
        setRecipe('');
        setPic('');
        console.log(props.recipes);
    }

    const generateList = () => {
        if (props.recipes.length > 0) {
            const recipesList = [];
            props.recipes.forEach((recipe, index) =>
                recipesList.push(
                    <li key={index}>{recipe.name}</li>
                ))
            return recipesList;
        }
    }

    if (props.showForm) {
        return (
            <>
                <ul>{generateList()}</ul>
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
                    <button onClick={updateRecipes}>Submit</button>
                </form>
            </>
        )
    }
    else {
        return (
            <></>
        )
    }
}

export default AddRecipe;