import React, { Component } from 'react';
import './App.css';
import UserInput from './User/UserInput';
import UserOutput from './User/UserOutput';

class App extends Component {
  state = {
    UserName: "Test User 1"
  }

  userNameChangeHandler = (ev) => this.setState({ UserName: ev.target.value });

  render() {
    const style = {
      textAlign: 'center'
    };

    return (
      <div className="App" style={style}>
        <UserInput
          change={this.userNameChangeHandler}
          userName={this.state.UserName}></UserInput>
        <UserOutput>{this.state.UserName}</UserOutput>
      </div>
    );
  }
}

export default App;
