import React from 'react';

import Aux from '../../../hoc/Aux';
import Button from '../../UI/Button/Button';

function orderSummary(props) {
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
            <p><strong>Price: ${props.price.toFixed(2)}</strong></p>
            <p>Continue to Checkout?</p>
            <Button btnType="Danger" clicked={props.checkoutCancelled}>CANCEL</Button>
            <Button btnType="Success" clicked={props.checkoutContinued}>CONTINUE</Button>
        </Aux>
    );
}

export default orderSummary;