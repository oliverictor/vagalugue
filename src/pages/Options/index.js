import React from 'react';
import { Background, HeaderView, HeaderText, IconView_GarageIconName, IconText_GarageIconName, IconView_DriverIconName, IconText_DriverIconName, IconView, IconImage, IconBt, Container, IconParking } from './styles';
import { useNavigation } from '@react-navigation/native';

import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Fontisto from 'react-native-vector-icons/Fontisto';
import MaterialCommunity from 'react-native-vector-icons/MaterialCommunityIcons';

export default function Options() {

    const navigation = useNavigation();

    return (
        <Background>

            <HeaderView>
                <HeaderText>Bem vindo!</HeaderText>

                <HeaderText>Escolha a Opção Desejada:</HeaderText>
            </HeaderView>




            <IconView>
                <IconBt onPress={() => navigation.navigate('Vehicles')} >


                    <MaterialCommunity name="steering" size={85} />


                    <IconView_DriverIconName>

                        <IconText_DriverIconName >Condutor</IconText_DriverIconName >

                    </IconView_DriverIconName>

                </IconBt>

                <IconBt onPress={() => navigation.navigate('Parking')}>

                    <IconParking source={require('../../assets/carrocancelaicone.png')} />


                    <IconView_GarageIconName>

                        <IconText_GarageIconName>Estacionamento</IconText_GarageIconName >

                    </IconView_GarageIconName>

                </IconBt>
            </IconView>









        </Background>
    );
}