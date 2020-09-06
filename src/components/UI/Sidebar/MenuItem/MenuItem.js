import React from 'react';
import {NavLink} from 'react-router-dom';


const menuItem = (props) => (
  <NavLink to= {props.path} style={{textDecoration:'none'}} exact={props.exact}>
   <li> <a className="app-menu__item " href="/">{props.children}<span className="app-menu__label">{props.name}</span></a></li>
  </NavLink>
)

export default menuItem