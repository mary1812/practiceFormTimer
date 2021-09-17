import React from 'react';
import Aloha from './components/Aloha';
import Clicker from './components/Clicker';


function App() {
  return (
    <React.Fragment>
      <Aloha name="Andrey" isGreeting />
      <Aloha name="Vika"/>
      <Clicker/>
    </React.Fragment>
  );
}

export default App;
