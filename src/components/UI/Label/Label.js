import React from 'react';

const label = (props) => (
      <label className={props.className} for={props.for}>{props.children}</label>
)

export default label;