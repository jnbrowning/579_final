import './enteredRecipes.css'

const EnteredRecipes = (props) => {

    //deletes recipe from list of recipes
    const deleteRecipe = (index) => {
        props.recipes.splice(index, 1);
        console.log(props.recipes);
        props.addRecipe(props.recipes);
        generateList();
        localStorage.setItem('recipes', JSON.stringify(props.recipes));
        window.location.reload();
    }

    //creates list items for recipes that have been added
    const generateList = () => {
        if (props.recipes.length > 0) {
            const recipesList = [];
            props.recipes.forEach((recipe, index) =>
                recipesList.push(
                    <li key={index} className='listRecipes'>
                        <button className='deleteButton' onClick={() => deleteRecipe(index)}>x</button>
                        {recipe.name}
                        <a href={recipe.recipe_url} target='blank' className='recipeUrl'>view recipe</a>
                    </li>
                ))
            return recipesList;
        }
    }

    //list of recipes that have been added
    return (
        <>
            <h3 className='listHeader'>List of Recipes</h3>
            <ul className='listOfRecipes'>{generateList()}</ul>
        </>
    );
}

export default EnteredRecipes;