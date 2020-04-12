import React from 'react';

import Aux from '../../../hoc/Aux';

const orderSummary = (props) => {
    const ingredient_summary = Object.keys(props.ingredients)
        .map(ing_key => {
            return <li key={ing_key}>
                <span style={{textTransform: 'capitalize'}}>{ing_key}</span>:
                {props.ingredients[ing_key]} </li>;
        });

    return (
        <Aux>
            <h3>Your Order</h3>
            <p>Burger with the following ingredients:</p>
            <ul>
                {ingredient_summary}
            </ul>
            <p>Continue to Checkout?</p>
        </Aux>
    );
};

export default orderSummary;