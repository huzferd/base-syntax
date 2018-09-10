import React from 'react';
import './UserOutput.css';

const UserOutput = (props) => {
    return (
        <div>
            <p className="UserOutput">{props.children}</p>
            <p className="UserOutput">{props.children}</p>
        </div>
    );
}

export default UserOutput;
