import React from "react";
import Aux from '../../hoc/Aux';
import Burger from '../../compenents/Burger/Burger';

function BurgerBuilder() {
    return (
        <Aux>
            <Burger/>
            <div>Build Controls</div>
        </Aux>
    );
}

export default BurgerBuilder;