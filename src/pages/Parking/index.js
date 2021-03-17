import React from 'react';
import { Background, HeaderView, HeaderText, IconView, IconImage, IconBt, IconView_ResidentialGarageIconName, IconText_ResidentialGarageIconName, IconView_CommercialGarageIconName, IconText_CommercialGarageIconName } from '../Options/styles';
import { useNavigation } from '@react-navigation/native';

export default function Parking() {

    const navigation = useNavigation();

    return (
        <Background>

            <HeaderView>
                <HeaderText>Por favor,</HeaderText>

                <HeaderText>Informe o tipo do estacionamento: </HeaderText>


            </HeaderView>

            <IconView>
                <IconBt onPress={() => navigation.navigate('residencial')} >
                    <IconImage source={require('../../assets/garagem1icone.png')} />

                    <IconView_ResidentialGarageIconName>

                        <IconText_ResidentialGarageIconName>Residencial</IconText_ResidentialGarageIconName >

                    </IconView_ResidentialGarageIconName>


                </IconBt>





                <IconBt onPress={() => navigation.navigate('comercial')}>
                    <IconImage source={require('../../assets/garagem2icone.png')} />

                    <IconView_CommercialGarageIconName>

                        <IconText_CommercialGarageIconName>Comercial</IconText_CommercialGarageIconName >

                    </IconView_CommercialGarageIconName>



                </IconBt>
            </IconView>
        </Background>
    );
}