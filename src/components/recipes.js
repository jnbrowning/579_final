import './recipes.css'
import {useEffect, useRef, useState} from "react";
import {Sortable} from "@shopify/draggable";

const Recipes = (props) => {

    //reference to My Recipes list to create sortable
    const recipeChoices = useRef();
    //reference to weekly plan to create sortable
    const weekPlan = useRef();

    //creates sortable containers with draggable elements
    useEffect(() => {
        //array of ul to make into sortable containers
        const weeklyElement = [recipeChoices.current, weekPlan.current];
        //create sortable containers with draggable elements inside
        const sortable = new Sortable(weeklyElement, {
            draggable: 'li',
            //for item dimensions as it moves between containers
            mirror: {
                constrainDimensions: true,
            },
        });

        //for tracking if weekly plan is full
        let numRecipes;
        //for creating list of items within weekly plan sortable container
        let items;

        //when a draggable item begins to drag, check how many items are in the weekly plan container
        sortable.on('drag:start', (evt) => {
            items = sortable.getDraggableElementsForContainer(sortable.containers[1]);
            numRecipes = items.length;
        })

        //if the weekly plan is full and the item being moved is not already in the weekly plan, don't allow it to be added to the container
        sortable.on('sortable:sort', (evt) => {
            if (numRecipes === 7 && evt.dragEvent.overContainer === sortable.containers[1]
                && evt.dragEvent.sourceContainer !== evt.dragEvent.overContainer) {
                    evt.cancel();
            }
        })

    }, []);

    //draggable lists with recipe choices and weekly plan
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