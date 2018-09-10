import React from 'react';
import './UserInput.css';

const UserInput = (props) => <input className="UserInput" type="text" onChange={props.change} value={props.userName}></input>;

export default UserInput;
