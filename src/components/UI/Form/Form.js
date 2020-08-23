import React from 'react';

const form = (props) => (
    <form id={props.id}>
        {props.children}
    </form>
)

export default form;