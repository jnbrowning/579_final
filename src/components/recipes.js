import './recipes.css'
import {useEffect, useRef, useState} from "react";
import {Sortable} from "@shopify/draggable";

const Recipes = (props) => {
    const recipeChoices = useRef();
    const weekPlan = useRef();

    const [recipeList, updateRecipes] = useState([]);

    const generateRecipes = () => {
        console.log(props.recipes)
        const recipesList = [];
        props.recipes.forEach((recipe, index) =>
            recipesList.push(
                <li key={index} className='recipeSlot'>{recipe.name}
                    <img src={recipe.pic} />
                </li>
        ))
        updateRecipes(recipesList);
        props.updateShowForm(false);
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
    }, [recipeList]);

    if (recipeList.length > 0) {
        return(
            <>
                <ul ref={weekPlan} className='weekSchedule'>
                </ul>
                <ul ref={recipeChoices} className='recipeList'>
                    {recipeList}
                </ul>
            </>

        )
    }

    else {
        return(
            <>
                <p>Add Recipes</p>
                <button onClick={generateRecipes}>Add Recipes</button>
            </>
        )
    }

}

export default Recipes;