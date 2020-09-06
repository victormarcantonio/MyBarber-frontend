import React from 'react';
import { propTypes } from 'react-bootstrap/esm/Image';
import InputMask from 'react-input-mask';


const input = (props) => (
    <InputMask className={props.className} type={props.type}id={props.id} name={props.name} placeholder={props.placeholder}  autoFocus={props.autofocus} mask={props.mask} maskChar={null} value={props.value} onChange={props.changed} max={props.max} />
)

export default input;