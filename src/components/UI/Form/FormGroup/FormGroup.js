import React from 'react';
import { propTypes } from 'react-bootstrap/esm/Image';

const formGroup = (props) => (

    <div className={props.className}>
       {props.children}
    </div>
)

export default formGroup;