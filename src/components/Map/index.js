import React, { Component, Fragment } from 'react';
import { View, Image } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import Geolocation from '@react-native-community/geolocation';
import Search from '../Search';
import Directions from '../Directions';
import { getPixelSize } from '../../../utils';
import markerImage from '../../assets/marker.png';
import { Back } from './styles';
import Geocoder from 'react-native-geocoding';
import backImage from '../../assets/back.png';
import firebase from '../../services/firebaseConnection';
import residencial from '../../assets/garagem1icone.png';
import comercial from '../../assets/garagem2icone.png';

Geocoder.init('AIzaSyDLftFbnJGAhSBeBxpnBORJKZCz34ur2Z4')

export default class Map extends Component {

    constructor(props) {
        super(props);
        this.state = {
            region: null,
            destination: null,
            duration: null,
            location: null,
            markers: [],
        }
    }



    async componentDidMount() {
        var that = this;
        firebase.database().ref("users").on('value', function (snapshot) {
            var auxMarkers = [];
            snapshot.forEach(element => {
                var local = element.val().local;
                var nome = element.val().nome;
                var locacao = element.val().locacao;
                var carro = element.val().qtdVagaCarro;
                var moto = element.val().qtdVagaMoto;
                var telefone = element.val().telefone;
                if (local != null) {
                    Geocoder.from(local).then(json => {
                        let location = json.results[0].geometry.location;
                        auxMarkers.push({
                            title: nome,
                            locacao: locacao,
                            carro: carro, 
                            moto: moto,
                            telefone: telefone,
                            coordinates: {
                                latitude: location.lat,
                                longitude: location.lng,
                            }
                        });

                    });

                }
            });
            that.setState({
                markers: auxMarkers
            });

        });

        Geolocation.getCurrentPosition(
            async ({ coords: { latitude, longitude } }) => {
                const response = await Geocoder.from({ latitude, longitude });
                const address = response.results[0].formatted_address;
                const location = address.substring(0, address.indexOf(','));

                this.setState({
                    location,
                    region: {
                        latitude,
                        longitude,
                        latitudeDelta: 0.0143,
                        longitudeDelta: 0.0134
                    }
                });
            }, //sucesso
            () => { }, //erro
            {
                timeout: 2000,
                enableHighAccuracy: true,
                maximumAge: 1000,
            }

        )
    }

    handleLocationSelected = (data, { geometry }) => {
        const { location: { lat: latitude, lng: longitude } } = geometry;

        this.setState({
            destination: {
                latitude,
                longitude,
                title: data.structured_formatting.main_text,
            }
        });
    };

    handleBack = () => {
        this.setState({ destination: null });
    }

    handleOnPress = (event, marker) => {
        this.setState({ destination: event.nativeEvent.coordinate });
        alert("\nEstacionameto: " + marker.title +
              "\n\nTipo: " + marker.locacao + 
              "\n\nQuantidade de vagas disponíveis para carro: " + marker.carro + 
              "\n\nQuantidade de vagas disponíveis para moto: " + marker.moto +
              "\n\nAgende sua vaga pelo telefone: " + marker.telefone); 
    }
    render() {
        const { region, destination } = this.state;
        return (
            <View style={{ flex: 1 }}>
                <MapView
                    style={{ flex: 1 }}
                    region={region}
                    showsUserLocation
                    loadingEnabled
                    ref={el => this.mapView = el}
                >

                    {
                        this.state.markers.map((marker, index) => (
                            <Marker
                                key={index}
                                coordinate={marker.coordinates}
                                title={marker.title}
                                image={marker.locacao === "Comercial" ? comercial : residencial}
                                onPress={event => this.handleOnPress(event, marker)}
                            />
                        ))

                    }

                    {destination && (
                        <Fragment>
                            <Directions
                                origin={region}
                                destination={destination}
                                onReady={result => {
                                    this.setState({ duration: Math.floor(result.duration) });
                                    this.mapView.fitToCoordinates(result.coordinates, {
                                        edgePadding: {
                                            right: getPixelSize(50),
                                            left: getPixelSize(50),
                                            top: getPixelSize(50),
                                            bottom: getPixelSize(350),
                                        }
                                    });
                                }}
                            />
                            <Marker
                                coordinate={destination}
                                anchor={{ x: 0, y: 0 }}
                                image={markerImage}
                            >
                            </Marker>
                        </Fragment>
                    )}

                </MapView>

                {destination ? (
                    <Fragment>
                        <Back onPress={this.handleBack}>
                            <Image source={backImage} />
                        </Back>
                    </Fragment>
                ) : (
                    <Search onLocationSelected={this.handleLocationSelected} />
                )}

            </View>
        );
    }
}