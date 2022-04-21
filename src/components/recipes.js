import './recipes.css'
import {useEffect, useRef, useState} from "react";
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
        let numRecipes;
        let items;
        sortable.on('drag:start', (evt) => {
            items = sortable.getDraggableElementsForContainer(sortable.containers[1]);
            numRecipes = items.length;
            console.log(items);
        })
        sortable.on('sortable:sort', (evt) => {
            if (numRecipes === 7 && evt.dragEvent.overContainer === sortable.containers[1]) {
                evt.cancel();
            }
        })
        sortable.on('drag:stop', () => {

        })
    }, []);

    return (
        <>
            <ul ref={weekPlan} className='weekSchedule'/>
            <h2>My Recipes</h2>
            <ul ref={recipeChoices} className='recipeList'>
                {props.recipeList}
            </ul>
        </>
    )
}

export default Recipes;