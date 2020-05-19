import React, {useState} from 'react';
import Aux from '../../hoc/Aux';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import classes from './Layout.module.css';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';

function Layout(props) {
    const [side_drawer_state, updateSideDrawerState] = useState(false);

    const sideDrawerClosedHandler = () => {
        updateSideDrawerState(false);
    };

    const sideDrawerToggleHandler = () => {
        updateSideDrawerState(!side_drawer_state);
    };

    return (
        <Aux>
            <Toolbar drawerToggleClicked={sideDrawerToggleHandler}/>
            <SideDrawer
                open={side_drawer_state}
                closed={sideDrawerClosedHandler} />
            <main className={classes.Content}>
                {props.children}
            </main>
        </Aux>
    );
};

export default Layout;