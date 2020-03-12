/**
 * Created by Galina on 3/25/2019.
 */
import React from "react";
import "./NavigationItems.css";
import NavigationItem from "./NavigationItem/NavigationItem";
import Aux from "../../../hoc/Auxiliary";

const navigationItems = props => {
  return (
    <ul className='NavigationItems'>
      <NavigationItem link='/' exact>
        Burger builder
      </NavigationItem>
      {!props.isAuth ? (
        <NavigationItem link='/auth'>Authenticate</NavigationItem>
      ) : (
        <Aux>
          <NavigationItem link='/orders'>Orders</NavigationItem>
          <NavigationItem link='/logout'>Logout</NavigationItem>
        </Aux>
      )}
    </ul>
  );
};

export default navigationItems;
