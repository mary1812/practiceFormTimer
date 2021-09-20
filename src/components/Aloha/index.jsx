import { Component } from 'react';

class Aloha extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isGreeting: true,
    };
    
  }

  switchState = () => {

    this.setState({
      isGreeting: !this.state.isGreeting
    });
  }


  render() {
    const { user }  = this.props;
    
    const { isGreeting } = this.state;

    let text;

    if(isGreeting) {
      text = 'Привет'
    } else {
      text = 'Пока'
    }

    return <section>
      <h1>{text} {user.name} {user.surName}</h1>
      {isGreeting ? <button onClick={this.switchState}>Сменить</button> : null}
    </section>
  }
}

export default Aloha;
