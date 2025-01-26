'use client'
import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import { config } from 'dotenv';

config();
const mapskey :string = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY?.toString() || "";
const containerStyle = {
  width: '100%',
  height: '400px'
};

const center = {
  lat: 37.437041393899676,
  lng: -4.191635586788259
};

const GoogleMapComponent = () => {
  return (
    <LoadScript {...{ "googleMapsApiKey": mapskey }}>
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={10}
      >
        <Marker position={center} />
      </GoogleMap>
    </LoadScript>
  );
};

export default GoogleMapComponent;