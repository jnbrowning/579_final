const WeeklyScheduleButton = (props) => {

    //generates HTML for recipe list items on weekly calendar page
    const generateRecipes = () => {
        const recipesList = [];
        props.recipes.forEach((recipe, index) =>
            recipesList.push(
                <li key={index} className='recipeSlot'>
                    <a href={recipe.recipe_url} target='blank' className='weekUrl'>
                        {recipe.name}
                        <img className='weekImg' src={recipe.pic} />
                    </a>
                </li>
            ))
        props.updateRecipes(recipesList);
        props.updateShowForm(false);
    }

    return (
        <button className='weekButton' onClick={generateRecipes}>Organize Weekly Schedule</button>
    );
}

export default WeeklyScheduleButton;