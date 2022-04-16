const MoreRecipes = () => {
    //reloads the page to return to the add recipes form
    const returnToForm = () => { window.location.reload(); }

    return (
        <button onClick={returnToForm}>Add/Edit Recipes</button>
    );
}

export default MoreRecipes;