'use client'
import React from 'react';
import { GoogleMap, LoadScript, Marker, InfoBox } from '@react-google-maps/api';
import { config } from 'dotenv';

config();
const mapskey: string = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY?.toString() || "";


const center = {
  lat: 38.363133961428275,
  lng: -0.4935381577044199
};

const GoogleMapComponent = () => {

  const defaultMapContainerStyle = {
    width: '400px',
    height: '400px',
    borderRadius: '20px',
  };
  const defaultMapOptions = {
    zoomControl: true,
    tilt: 0,
    gestureHandling: 'auto',
    mapTypeId: 'satellite',
  };

  const dummyData = [
    {
      id: 1,
      name: 'macdonalss',
      location: 'GPS Location',
      status: 'Late',
      coordinates: { lat: 38.363133961428275, long: -0.4935381577044099 },
    }];
  return (
    <LoadScript {...{ "googleMapsApiKey": mapskey }}>
      <GoogleMap
        mapContainerStyle={defaultMapContainerStyle}
        center={center}
        zoom={18}
        options={defaultMapOptions}
      >
        {dummyData.map((user, key) => {
          return (
            <Marker
              key={key}
              position={center}
            >
              <InfoBox
                options={{
                  pane: 'mapPane',
                  boxStyle: {
                    width: '150px',
                  },
                  closeBoxURL: ``,
                }}
              >
                <div
                  style={{
                    backgroundColor: '#02AFE1',
                    color: 'white',
                    width: '150px',
                    minHeight: '50px',
                    padding: 15,
                    opacity: 0.5,
                    borderRadius: 10,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    fontFamily: 'montserrat',
                  }}
                >
                  <div
                    style={{
                      fontSize: 16,
                      fontWeight: 500,
                      padding: 1,
                      textAlign: 'center',
                    }}
                  >

                  </div>

                </div>
              </InfoBox>

            </Marker>
          )
        })}
        <Marker position={center} />
      </GoogleMap>
    </LoadScript>
  );
};

export default GoogleMapComponent;