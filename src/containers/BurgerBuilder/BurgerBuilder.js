import React, { useState } from "react";
import Aux from '../../hoc/Aux';
import Burger from '../../compenents/Burger/Burger';
import BuildControls from '../../compenents/Burger/BuildControls/BuildControls';

const INGREDIENT_PRICES = {
    salad: 0.5,
    cheese: 0.25,
    meat: 2,
    bacon: 0.75
};

function BurgerBuilder() {
    const [ingredients, updateIngredients] = useState({salad: 0, bacon: 0, cheese: 0, meat: 0});
    const [price, updatePrice] = useState(0.00);

    const addIngredientHandler = (type) => {
        const new_count = ingredients[type] + 1;
        let updated_ingredients = ingredients;
        updated_ingredients[type] = new_count;
        updateIngredients(updated_ingredients);
        const add_price = INGREDIENT_PRICES[type];
        updatePrice(price + add_price);
    };

    const removeIngredientHandler = (type) => {
        const new_count = ingredients[type] - 1;
        let updated_ingredients = ingredients;
        updated_ingredients[type] = new_count;
        updateIngredients(updated_ingredients);
        const add_price = INGREDIENT_PRICES[type];
        updatePrice(price - add_price);
    };

    return (
        <Aux>
            <Burger ingredients={ingredients}/>
            <BuildControls ingredientAdded={addIngredientHandler} ingredientRemoved={removeIngredientHandler} />
        </Aux>
    );
}

export default BurgerBuilder;