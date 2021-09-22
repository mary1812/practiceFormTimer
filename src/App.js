import React from 'react';
import { Component } from 'react';
import AlohaDashboard from './components/AlohaDashboard';
import SignInForm from './components/SignInForm';
import StopWatch from './components/StopWatch';


class App extends Component {
constructor(props) {
  super(props);
  this.state = {
  isVisible: true
  }
}
  togVis = () => {
    this.setState({
    isVisible: !this.state.isVisible
  })
}

  render() {
    const { isVisible } = this.state;

    return <isVisible/> && <StopWatch/> &&  <SignInForm/>;
 
  }
}

export default App;
