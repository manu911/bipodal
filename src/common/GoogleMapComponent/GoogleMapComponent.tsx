'use client'
import React from 'react';
import { GoogleMap, InfoWindow, LoadScript, Marker } from '@react-google-maps/api';
import { config } from 'dotenv';
import Logo from '../Logo/Logo';
import { Size } from '@/utils/types.module';

config();
const mapskey: string = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY?.toString() || "";


const center = {
  lat: 38.363133961428275,
  lng: -0.4935381577044199
};

const GoogleMapComponent = () => {

  const defaultMapContainerStyle = {
    width: '88vw',
    aspectRatio:4/3,
    borderRadius: '20px',
  };
  const defaultMapOptions = {
    zoomControl: true,
    tilt: 0,
    gestureHandling: 'auto',
    mapTypeId: 'roadmap',
  };
  return (
    <div>

      <LoadScript {...{ "googleMapsApiKey": mapskey }}>
        <GoogleMap
          mapContainerStyle={defaultMapContainerStyle}
          center={center}
          zoom={16}
          options={defaultMapOptions}
        >
       
          <InfoWindow position={center} >
              <Logo size={Size.XXS} />
          </InfoWindow> 
          <Marker position={center} />


        </GoogleMap>
      </LoadScript>
    </div>
  );
};

export default GoogleMapComponent;