import React from 'react';
import {NavLink} from 'react-router-dom';


const menuItem = (props) => (
  <NavLink to= {props.path} style={{textDecoration:'none'}} exact={props.exact}>
   <li> <a className="app-menu__item " href="/"><i className="app-menu__icon fa fa-dashboard">{props.children}</i><span className="app-menu__label">{props.name}</span></a></li>
  </NavLink>
)

export default menuItem