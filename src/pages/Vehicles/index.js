import React from 'react';
import { Background, HeaderView, HeaderText, IconView, IconImage, IconBt } from '../Options/styles';
import { useNavigation } from '@react-navigation/native';

export default function Vehicles() {

    const navigation = useNavigation();

    return (
        <Background>

            <HeaderView>
                <HeaderText>Bem vindo!</HeaderText>

                <HeaderText>Escolha a Opção Desejada:</HeaderText>
            </HeaderView>

            <IconView>
                <IconBt onPress={() => navigation.navigate('carro')} >
                    <IconImage source={require('../../assets/Carro.png')} />
                </IconBt>

                <IconBt onPress={() => navigation.navigate('motocicleta')}>
                    <IconImage source={require('../../assets/Motocicleta.png')} />
                </IconBt>
            </IconView>
        </Background>
    );
}