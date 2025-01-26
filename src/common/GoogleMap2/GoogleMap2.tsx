import React from "react";
import { GoogleMap, Marker, InfoWindow } from "@react-google-maps/api";

class Map extends React.Component {
  state = {
    center: { lat: 38.363133961428275, lng: -0.4935381577044199 },
    coordsResult: [] as google.maps.places.PlaceResult[]
  };

  onMapLoad = (map: HTMLDivElement | google.maps.Map) => {
    const request = {
      query: "Clinica Bipodal",
      fields: ["name", "geometry"]
    };

    const service = new window.google.maps.places.PlacesService(map);

    service.findPlaceFromQuery(request, (results, status) => {
      if (status === window.google.maps.places.PlacesServiceStatus.OK) {
        if (results && results[0] && results[0].geometry) {
          this.setState({
            center: results[0].geometry.location,
            coordsResult: results
          });
        }
      }
    });
  };

  render() {
    return (
      <div>
        <GoogleMap
          center={this.state.center}
          zoom={13}
          onLoad={this.onMapLoad}
          mapContainerStyle={{ height: "400px", width: "800px" }}
        >
          {this.state.coordsResult.map((result, index) => (
            <Marker
              key={index}
              position={result.geometry?.location || this.state.center}
              title={result.name}
            >
            <InfoWindow 
            options={{ maxWidth: 300 }}>
                
                  <span>{result.name}</span>
                
              </InfoWindow>
              </Marker>
          ))}
        </GoogleMap>
      </div>
    );
  }
}

export default Map;
