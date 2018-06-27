import React, { Component } from 'react';
import FlatList from '../containers/FlatList.jsx';
import Map from '../containers/Map.jsx';

class App extends Component {
  render() {
    return (
      <div className='row'>
        <FlatList />
        <Map />
      </div>
    )
  }
}

export default App;
