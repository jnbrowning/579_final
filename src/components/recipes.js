import './recipes.css'
import {useEffect, useRef} from "react";
import {Sortable} from "@shopify/draggable";

const Recipes = (props) => {
    const recipeChoices = useRef();
    const weekPlan = useRef();

    useEffect(() => {
        const weeklyElement = [recipeChoices.current, weekPlan.current];
        const sortable = new Sortable(weeklyElement, {
            draggable: 'li',
            mirror: {
                constrainDimensions: true,
            },
        });
        console.log('newSortable')
    }, []);

    return (
        <>
            <ul ref={weekPlan} className='weekSchedule'>
            </ul>
            <ul ref={recipeChoices} className='recipeList'>
                {props.recipeList}
            </ul>
        </>
    )
}

export default Recipes;