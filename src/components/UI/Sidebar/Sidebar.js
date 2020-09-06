import React from 'react';

import NoFoto from '../../../assets/Images/sem-foto.png';

import MenuItem from './MenuItem/MenuItem';

import { faTachometerAlt, faCalendar, faBuilding, faAddressBook, faUsers, faCut } from "@fortawesome/free-solid-svg-icons";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const sidebar = () => (
    
    
    <aside className="app-sidebar">
        <div className="app-sidebar__user"><img className="app-sidebar__user-avatar" src={NoFoto} style={{ maxWidth: '48px', maxHeight: '48px', }} alt="User Image"></img>
            <div>
                <p className="app-sidebar__user-name">Teste</p>
                <p className="app-sidebar__user-designation">Programador</p>
            </div>
        </div>
        <ul className="app-menu">
            <MenuItem path="/" exact name="DashBoard">
                 <i class="app-menu__icon fa fa-dashboard"></i>
            </MenuItem>
            <MenuItem path="/agenda" name="Agenda">
                <i class="app-menu__icon fa fa-calendar"></i>
            </MenuItem>
            <MenuItem path="/barbearia" name="Barbearia">
            <i class="app-menu__icon fa fa-building"></i>
            </MenuItem>
            <MenuItem path="/listarCliente" name="Clientes">
            <i class="app-menu__icon fa fa-address-book"></i>
            </MenuItem>
            <MenuItem path="/listarFuncionario" name="Funcionários">
                <i class="app-menu__icon fa fa-users"></i>
            </MenuItem>
            <MenuItem path="/listarServico" name="Serviços">
               <i class="app-menu__icon fa fa-cut"></i>
            </MenuItem>
        </ul>
    </aside>
)


export default sidebar;