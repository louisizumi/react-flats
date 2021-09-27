import React, { Component } from 'react';
import Flat from './flat';
import flats from '../../data/flats';

class FlatList extends Component {
  render() {
    return (
      flats.map((flat) => {
        return (
          <Flat details={flat} key={flat.id} />
        );
      })
    );
  }
}

export default FlatList;