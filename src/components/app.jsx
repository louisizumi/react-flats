import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

import FlatList from './flat_list';
import flats from '../../data/flats';
import Marker from './marker';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = { selectedFlat: flats[0] };
  }

  selectFlat = (id) => {
    this.setState({ selectedFlat: flats[id - 1] });
  }

  center = () => {
    return {
      lat: this.state.selectedFlat.lat,
      lng: this.state.selectedFlat.lng
    };
  }

  render() {
    return (
      <div>
        <div className="flat-list">
          <FlatList
            flats={flats}
            selectedFlat={this.state.selectedFlat}
            selectFlat={this.selectFlat}
          />
        </div>
        <div className="map-container" style={{ height: '100vh', width: '100%' }}>
          <GoogleMapReact defaultCenter={this.center()} defaultZoom={13}>
            <Marker lat={this.state.selectedFlat.lat} lng={this.state.selectedFlat.lng} />
          </GoogleMapReact>
        </div>
      </div>
    );
  }
}

export default App;
