import React from "react";
import GoogleMapReact from 'google-map-react';

const Marker = () => <div className="marker"></div>;

export default function SimpleMap(){
  const defaultProps = {
    center: {
      lat: 51.4769,
      lng: -0.0005
    },
    zoom: 13
  };

  return (
    // Important! Always set the container height explicitly
    <div className="map-container" style={{ height: '100vh', width: '100%' }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "" }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      >
        <Marker
          lat={59.955413}
          lng={30.337844}
        />
      </GoogleMapReact>
    </div>
  );
}
