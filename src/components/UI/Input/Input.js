import React from 'react';
import { propTypes } from 'react-bootstrap/esm/Image';


const input = (props) => (
    <input className={props.className} type={props.type}id={props.id} name={props.name} placeholder={props.placeholder} datamask={props.datamask} autofocus={props.autofocus} />
)

export default input;