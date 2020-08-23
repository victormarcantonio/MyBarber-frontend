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
                <FontAwesomeIcon icon={faTachometerAlt} />
            </MenuItem>
            <MenuItem path="/agenda" name="Agenda">
                <FontAwesomeIcon icon={faCalendar} />
            </MenuItem>
            <MenuItem path="/barbearia" name="Barbearia">
                <FontAwesomeIcon icon={faBuilding} />
            </MenuItem>
            <MenuItem path="/clientes" name="Clientes">
                <FontAwesomeIcon icon={faAddressBook} />
            </MenuItem>
            <MenuItem path="/listarFuncionario" name="Funcionários">
                <FontAwesomeIcon icon={faUsers} />
            </MenuItem>
            <MenuItem path="/listarServico" name="Serviços">
                <FontAwesomeIcon icon={faCut} />
            </MenuItem>
        </ul>
    </aside>
)


export default sidebar;