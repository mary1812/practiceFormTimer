import React from 'react';
import { Component } from 'react';
import Aloha from './components/Aloha';


const userDb = [
  {
    id: 1,
    name: 'First',
    surName: 'User 1',
  },
  {
    id: 2,
    name: 'Second',
    surName: 'User 2',
  },
  {
    id: 3,
    name: 'Third',
    surName: 'User 3',
  },
  {
    id: 4,
    name: 'Не помню',
    surName: 'User 4',
  },
  {
    id: 5,
    name: 'Вспомнил',
    surName: 'А не показалось',
  },
];

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isReverseSortOrder: false,
      AlohaArray: userDb.map((user) => (
        <Aloha key={`unique key ${user.name} ${user.surName}`} user={user} />
      )),
    };
  }

  sortArray = () => {
    const { AlohaArray } = this.state;

    const newAlohaArray = AlohaArray.slice();

    newAlohaArray.reverse();

    this.setState({
      isReverseSortOrder: !this.state.isReverseSortOrder,
      AlohaArray: newAlohaArray,
    });
  };

  render() {
    const { AlohaArray } = this.state;

    return (
      <React.Fragment>
        <h1>
          Сейчас порядок сортировки{' '}
          {this.state.isReverseSortOrder ? 'Обратный' : 'Прямой'}
        </h1>
        <button onClick={this.sortArray}>Сменить порядок</button>
        {AlohaArray}
      </React.Fragment>
    );
  }
}

export default App;
