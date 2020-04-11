import React from 'react';

import classes from './Burger.module.css';
import BurgerIngredient from "./BurgerIngredient/BurgerIngredient";

const burger = (props) => {
    let transformed_ingredients = Object.keys(props.ingredients)
        .map(ing_key => {
            return [...Array(props.ingredients[ing_key])].map((_, i) => {
                return <BurgerIngredient key={ing_key + i} type={ing_key}/>;
            });
        }).reduce((arr, el) => {
            return arr.concat(el);
        }, []);

    if (transformed_ingredients.length === 0) {
        transformed_ingredients = <p>Fill me up!</p>;
    }
    return (
        <div className={classes.Burger}>
            <BurgerIngredient type="bread-top"/>
            {transformed_ingredients}
            <BurgerIngredient type="bread-bottom"/>
        </div>
    );
};

export default burger;