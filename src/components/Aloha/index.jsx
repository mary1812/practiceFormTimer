import { Component } from 'react';

class Aloha extends Component {

  render() {
    const {name, isGreeting } = this.props;

    // let text;

    // if(isGreeting) {
    //   text = 'Привет';
    // } else {
    //   text = 'Пока';
    // }

    // const text = isGreeting ? 'Привет' : 'Пока';

    return <h1>{isGreeting ? 'Привет' : 'Пока'} {name}</h1>
  }
}

export default Aloha;