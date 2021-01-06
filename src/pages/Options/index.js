import React from 'react';
import { Background, HeaderView, HeaderText, IconView, IconImage, IconBt, Container } from './styles';
import { useNavigation } from '@react-navigation/native';

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
                    <IconImage source={require('../../assets/Condutor.png')} />
                </IconBt>

                <IconBt onPress={() => navigation.navigate('Parking')}>
                    <IconImage source={require('../../assets/Estacionamento.png')} />
                </IconBt>
            </IconView>
        </Background>
    );
}