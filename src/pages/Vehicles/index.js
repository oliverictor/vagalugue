import React from 'react';
import { Background, HeaderView, HeaderText, IconView_CarIconName, IconText_CarIconName, IconView_MotoIconName, IconText_MotoIconName, IconView, IconImage, IconBt } from '../Options/styles';
import { useNavigation } from '@react-navigation/native';

import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Fontisto from 'react-native-vector-icons/Fontisto';


export default function Vehicles() {

    const navigation = useNavigation();

    return (
        <Background>

            <HeaderView>

                <HeaderText>Por favor,</HeaderText>

                <HeaderText>Informe o tipo do seu veiculo:</HeaderText>
            </HeaderView>




            <IconView>
                <IconBt onPress={() => navigation.navigate('carro')} >

                    <FontAwesome5 name="car" size={90} />



                    <IconView_CarIconName>

                        <IconText_CarIconName>Carro</IconText_CarIconName>

                    </IconView_CarIconName>

                </IconBt>




                <IconBt onPress={() => navigation.navigate('motocicleta')}>


                    <Fontisto name="motorcycle" size={93} />


                    <IconView_MotoIconName>

                        <IconText_MotoIconName>Moto</IconText_MotoIconName>

                    </IconView_MotoIconName>

                </IconBt>
            </IconView>






        </Background>
    );
}