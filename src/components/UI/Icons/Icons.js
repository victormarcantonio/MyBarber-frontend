import React from 'react';

import {FontAwesomeIcon}  from '@fortawesome/react-fontawesome';
import { propTypes } from 'react-bootstrap/esm/Image';

const icons = (props) => (
   <FontAwesomeIcon icon={props.icon} size={props.size}/>
)

export default icons;