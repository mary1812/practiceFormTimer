import { Component } from 'react';

class Aloha extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isGreeting: true,
    };

    // this.switchState = this.switchState.bind(this);
  }

  switchState = () => {
    const { isGreeting } = this.state;
    
    const switchedGreeting = !isGreeting;

    const newState = {
      isGreeting : switchedGreeting
    }

    this.setState(newState);

    /* 
    this.setState({
      isGreeting : !isGreeting
    });
        */
  }

  render() {
    const { name } = this.props;
    const { isGreeting } = this.state;

    return (
      <div>
        <h1>
          {isGreeting ? 'Привет' : 'Пока'} {name}
        </h1>
        <button onClick={this.switchState}>Нажми чтобы поменять состояние</button>
      </div>
    );
  }
}

export default Aloha;
