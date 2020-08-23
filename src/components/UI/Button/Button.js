import React from 'react';

import Icons from '../../UI/Icons/Icons';

const button = (props) => (
<button type={props.type} className={props.className} title={props.title} form={props.form}>{props.children}</button>
)

export default button;