import React from 'react';

import Icons from '../../UI/Icons/Icons';

const cardDash = (props) => (
    <div className="col-md-6 col-lg-3">
    <div className= {`widget-small ${props.color} coloured-icon`}>
        <i className="icon">
        <Icons icon={props.icon} />
        </i>
        <div className="info">
            <h4>{props.name}</h4>
            <p>
             <b>{props.value}</b>
            </p>
        </div>
    </div>
</div>
)

export default cardDash;