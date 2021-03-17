import React from 'react';
import MapViewDirections from 'react-native-maps-directions';

const Directions = ({ destination, origin, onReady }) => (

    <MapViewDirections
        destination={destination}
        origin={origin}
        onReady={onReady}
        apikey='AIzaSyDLftFbnJGAhSBeBxpnBORJKZCz34ur2Z4'
        strokeWidth={6}
        strokeColor='#5fbff9'
    />
);

export default Directions; 