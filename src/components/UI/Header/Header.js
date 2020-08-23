import React from 'react';
import logo from '../../../assets/Images/mybarb.png';

import {faCog, faUser, faLg} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const header = (props) => (
  <>
 <header className="app-header"><a className="app-header__logo" href="/">
 MyBarber<img className="ml-1"  src={logo} width="15" height="auto"  alt=""></img>
</a>
<a className="app-sidebar__toggle" href="#" data-toggle="sidebar" aria-label="Hide Sidebar"></a>
      <ul className="app-nav">
        <li className="dropdown"><a className="app-nav__item" href="#" data-toggle="dropdown" aria-label="Open Profile Menu"><FontAwesomeIcon icon={faUser}/></a>
          <ul className="dropdown-menu settings-menu dropdown-menu-right">
            <li><a className="dropdown-item" href="page-user.html"><i className="fa fa-cog fa-lg"></i> Configurações</a></li>
            <li><a className="dropdown-item" href="page-user.html"><i className="fa fa-user fa-lg"></i> Perfil</a></li>
            <li><a className="dropdown-item" ><i className="fa fa-sign-out fa-lg"></i> Sair</a></li>
          </ul>
        </li>
      </ul>	
</header>
     </>
)


export default header;

