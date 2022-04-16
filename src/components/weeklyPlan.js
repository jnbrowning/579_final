import { Sortable, Plugins } from '@shopify/draggable';
import {useEffect, useRef, useState} from "react";
import './weeklyPlan.css';
import Recipes from "./recipes";
import AddRecipe from "./addRecipe";
// Or
// import Swappable from '@shopify/draggable/lib/swappable';

const WeeklyPlan = () => {
    const [recipes, addRecipe] = useState([])
    const [showForm, updateShowForm] = useState(true);

    console.log(recipes);
    return (
        <div>
            <ul>
                <li>Monday</li>
                <li>Tuesday</li>
                <li>Wednesday</li>
                <li>Thursday</li>
                <li>Friday</li>
                <li>Saturday</li>
                <li>Sunday</li>
            </ul>
            {/*Creates list items of added recipes*/}
            <Recipes recipes={recipes} updateShowForm={updateShowForm} />
            {/*Form to allow user to add new recipes*/}
            <AddRecipe showForm={showForm} addRecipe={addRecipe} recipes={recipes}/>
        </div>
    );
}

export default WeeklyPlan;