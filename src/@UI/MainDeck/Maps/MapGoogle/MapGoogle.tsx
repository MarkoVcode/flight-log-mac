import React from 'react'
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';
import './style.css'

const containerStyle = {
  width: '100vh',
  height: '85vh'
};

const center = {
  lat: -3.745,
  lng: -38.523
};

function MapGoogle() {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: ""
  })
 
  console.log(isLoaded)

  const [map, setMap] = React.useState(null)

// @ts-ignore
  const onLoad = React.useCallback(function callback(map) {
    const bounds = new window.google.maps.LatLngBounds(center);
    map.fitBounds(bounds);
    setMap(map)
  }, [])
// @ts-ignore
  const onUnmount = React.useCallback(function callback(map) {
    setMap(null)
  }, [])

  return isLoaded ? (
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={13}
        onLoad={onLoad}
        onUnmount={onUnmount}
      >
        { /* Child components, such as markers, info windows, etc. */ }
        <></>
      </GoogleMap>
  ) : <></>
}

export default React.memo(MapGoogle)