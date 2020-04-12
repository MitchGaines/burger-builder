import React, {useState} from "react";
import Aux from '../../hoc/Aux';
import Burger from '../../compenents/Burger/Burger';
import BuildControls from '../../compenents/Burger/BuildControls/BuildControls';
import Modal from '../../compenents/UI/Modal/Modal';
import OrderSummary from '../../compenents/Burger/OrderSummary/OrderSummary';

const INIT_PRICE = 6.50;
const INGREDIENT_PRICES = {
    salad: 0.5,
    cheese: 0.25,
    meat: 2,
    bacon: 0.75
};

function BurgerBuilder() {
    const [ingredients, updateIngredients] = useState({salad: 0, bacon: 0, cheese: 0, meat: 0});
    const [price, updatePrice] = useState(INIT_PRICE);
    const [can_purchase, updateCanPurchase] = useState(false);
    const [is_checking_out, updateIsCheckingOut] = useState(false);

    const availableForPurchase = () => {
        const num_ingredients = Object.keys(ingredients)
            .map(ing_key => {
                return ingredients[ing_key];
            }).reduce((sum, element) => {
                return sum + element;
            }, 0);

        updateCanPurchase(num_ingredients > 0);
    };

    const addIngredientHandler = (type) => {
        const new_count = ingredients[type] + 1;
        let updated_ingredients = ingredients;
        updated_ingredients[type] = new_count;
        updateIngredients(updated_ingredients);
        const add_price = INGREDIENT_PRICES[type];
        updatePrice(price + add_price);
        availableForPurchase();
    };

    const removeIngredientHandler = (type) => {
        const new_count = ingredients[type] - 1;
        if (new_count < 0) {
            return;
        }
        let updated_ingredients = ingredients;
        updated_ingredients[type] = new_count;
        updateIngredients(updated_ingredients);
        const add_price = INGREDIENT_PRICES[type];
        updatePrice(price - add_price);
        availableForPurchase();
    };

    const disabled_info = {
        ...ingredients
    };
    for (let key in disabled_info) {
        disabled_info[key] = (disabled_info[key] <= 0);
    }

    const checkoutHandler = () => {
        updateIsCheckingOut(true);
    };

    const checkoutCancelHandler = () => {
        updateIsCheckingOut(false);
    };

    return (
        <Aux>
            <Modal show={is_checking_out} modalClosed={checkoutCancelHandler}>
                <OrderSummary ingredients={ingredients}/>
            </Modal>
            <Burger ingredients={ingredients}/>
            <BuildControls ingredientAdded={addIngredientHandler}
                           ingredientRemoved={removeIngredientHandler}
                           disabled={disabled_info}
                           price={price}
                           can_purchase={can_purchase}
                           checkout={checkoutHandler}/>
        </Aux>
    );
}

export default BurgerBuilder;