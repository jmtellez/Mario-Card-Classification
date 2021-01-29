import React, { Component } from 'react';
import { CardList } from './components/card-list/card-list.component';

class App extends Component {
  constructor() {
    super();
    this.state = {
      marioCards: []
    }
  }
  componentDidMount() {
    fetch('https://my-json-server.typicode.com/jmtellez/marioCardsInfo/marioCards')
      .then(response => response.json())
      .then(info => this.setState({ marioCards: info }))
  }

  render() {
    const { marioCards } = this.state;
    return (
      <div>
        <h1>Mario Cards</h1>
        <CardList marioCards={marioCards}/>
      </div>
    );
  }
}

export default App;
