import React, { Component } from 'react';
import SimpleMap from './google_map_react';
import FlatList from './flat_list';

class App extends Component {
  render() {
    return (
      <div>
        <div className="flat-list">
          <FlatList />
        </div>
        {SimpleMap()}
      </div>
    );
  }
};

export default App;
