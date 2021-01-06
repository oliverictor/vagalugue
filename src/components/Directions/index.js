import React from 'react';
import MapViewDirections from 'react-native-maps-directions';

const Directions = ({ destination, origin, onReady }) => (

    <MapViewDirections
        destination={destination}
        origin={origin}
        onReady={onReady}
        apikey='AIzaSyAA_RcxoOVqR6pWt59m9gjJuVIwHGs9sRU'
        strokeWidth={3}
        strokeColor='#222'
    />
);

export default Directions; 