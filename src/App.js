import logo from './logo.svg';
import './App.css';
import React, { FC, useState } from "react";
import { Sortable } from '@shopify/draggable';
import WeeklyPlan from "./components/weeklyPlan";


const App = (props) => {


    return (
        <WeeklyPlan />
    );
};

export default App;