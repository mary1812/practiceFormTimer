/* 
  Создайте компонент Clicker
  у него в состоянии должен быть счетчик количества кликов по нему
  Компонент должен выводить на экран количестов кликов 
  и кнопку, по нажатию на которую счетчик растет

*/

import { Component } from 'react';

class Clicker extends Component {
  constructor(props) {
    super(props);

    this.state = {
      clickAmount : 0
    }
  }

  handleClick = () => {
    const { clickAmount } = this.state;

    this.setState({
      clickAmount : clickAmount + 1
    });
  }

  render() {
    console.log(this);
    const {clickAmount} = this.state;


    return (
    <div>
      <p>Нажали {clickAmount} раз</p>
      <button onClick={this.handleClick}>жми</button>
    </div>)
  }
}


export default Clicker;