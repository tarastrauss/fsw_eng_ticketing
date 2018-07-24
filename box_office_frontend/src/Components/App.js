import React, { Component } from 'react';
import '../CSS/App.css';
import TicketList from '../Components/TicketList.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1 className="heading">BoxOffice</h1>
        <TicketList />
      </div>
    );
  }
}



export default App;

