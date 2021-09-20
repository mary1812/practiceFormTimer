import React from 'react';
import { Component } from 'react';
import AlohaDashboard from './components/AlohaDashboard';



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
      users: userDb
    };
  }

  sortArray = () => {
    const { users } = this.state;

    const newUsers = users.slice();

    newUsers.reverse();

    this.setState({
      isReverseSortOrder: !this.state.isReverseSortOrder,
      users: newUsers,
    });
  };

  render() {
    const {users} = this.state;

    return (
      <AlohaDashboard users={users}/>
    );
  }
}

export default App;
