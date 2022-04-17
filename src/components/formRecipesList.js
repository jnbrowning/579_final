import './formRecipesList.css'

const FormRecipesList = (props) => {

    const deleteRecipe = (index) => {
        props.recipes.splice(index, 1);
        console.log(props.recipes);
        props.addRecipe(props.recipes);
        generateList();
        localStorage.setItem('recipes', JSON.stringify(props.recipes));
        window.location.reload();
    }

    const generateList = () => {
        if (props.recipes.length > 0) {
            const recipesList = [];
            props.recipes.forEach((recipe, index) =>
                recipesList.push(
                    <li key={index}>
                        <button className='deleteButton' onClick={() => deleteRecipe(index)}>x</button>
                        {recipe.name}
                        <a href={recipe.recipe_url} target='blank'>view recipe</a>
                    </li>
                ))
            return recipesList;
        }
    }

    return (
        <>
            <h3 className='listHeader'>List of Recipes</h3>
            <ul className='recipes'>{generateList()}</ul>
        </>
    );
}

export default FormRecipesList;