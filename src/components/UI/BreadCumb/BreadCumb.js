import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import Icons from '../../UI/Icons/Icons';


const breadCumb = (props) => (
        <ul className="app-breadcrumb breadcrumb ">
            <li className="breadcrumb-item"><i className="fa fa-home fa-lg">
                </i>
                </li>
            <li className="breadcrumb-item "><a href="#">{props.name}</a></li>
        </ul>
)


export default breadCumb;