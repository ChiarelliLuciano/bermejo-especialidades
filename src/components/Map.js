import React, { Component } from "react";
import { GoogleMap, LoadScript } from "@react-google-maps/api";
import { Marker } from "@react-google-maps/api";
import Credentials from "./Credentials";

const containerStyle = {
  width: "90%",
  height: "400px",
  margin: "100px auto"
};

const center = {
  lat: -34.531749,
  lng: -58.516294,
};

class Map extends Component {
  render() {
    return (
      <LoadScript googleMapsApiKey={`${Credentials.APIKEY}`}>
        <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={18}>
          {/* Child components, such as markers, info windows, etc. */}
          <>
            <Marker position={center} />
          </>
        </GoogleMap>
      </LoadScript>
    );
  }
}
export default Map;
