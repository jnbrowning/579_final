import './recipes.css'
import {useEffect, useRef} from "react";
import {Sortable} from "@shopify/draggable";

const Recipes = (props) => {
    const recipeChoices = useRef();
    const weekPlan = useRef();

    const generateRecipes = () => {
        console.log('generate')
        const recipesList = [];
        props.recipes.forEach((recipe, index) =>
            recipesList.push(
                <li key={index} className='recipeSlot'>{recipe.name}
                    <img src={recipe.pic} />
                </li>
        ))
        return recipesList;
    }

    useEffect(() => {
        const weeklyElement = [recipeChoices.current, weekPlan.current];
        const sortable = new Sortable(weeklyElement, {
            draggable: 'li',
            mirror: {
                constrainDimensions: true,
            },
        });
        console.log('newSortable')
    })

    if (props.recipes.length > 0) {
        return(
            <>
                <ul ref={weekPlan} className='weekSchedule'>

                </ul>
                <ul ref={recipeChoices} className='recipeList'>
                    {generateRecipes()}
                </ul>
            </>
        )
    }

    else {
        return(
            <p>Add Recipes</p>
        )
    }

}

export default Recipes;