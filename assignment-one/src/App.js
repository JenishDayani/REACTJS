import { Component } from 'react';
import './App.css';

import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';

class App extends Component {
  state = {
    userName: 'superMax',
  };

  userNameChangedHandler = (event) => {
    this.setState({
      userName: event.target.value,
    });
  };

  render() {
    return (
      <div className='App'>
        <UserInput
          changed={this.userNameChangedHandler}
          value={this.state.userName}
        />
        <UserOutput userName={this.state.userName} userAge='22' />
        <UserOutput userName={this.state.userName} userAge='22' />
        <UserOutput userName={this.state.userName} userAge='22' />
        {/* <UserOutput userName={this.state.userName} userAge='22' />
        <UserOutput userName={this.state.userName} userAge='22' /> */}
      </div>
    );
  }
}

export default App;
