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
                    <li key={index}><button onClick={() => deleteRecipe(index)}>Delete</button>{recipe.name}</li>
                ))
            return recipesList;
        }
    }

    return (
        <ul>{generateList()}</ul>
    );
}

export default FormRecipesList;