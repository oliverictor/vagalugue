import styled from 'styled-components/native';



export const Background = styled.View`
flex: 1; 
background-color: #5fbff9; 
`;

export const HeaderView = styled.View`
margin-top: 45px; 
justify-content: center; 
align-items: center;  
`;

export const HeaderText = styled.Text`
font-size: 25px;  
color: #000000;
text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.75);
font-family: Roboto-BlackItalic;

`;




/** -------------------------------------------------------------------------------------------------------------------- */





export const IconView_CarIconName = styled.View`


`;
export const IconText_CarIconName = styled.Text`
font-size: 20px;
font-family: Roboto-Bold;
text-shadow: 1px 1px 5px rgba(0, 0, 0, 0.75);
color: #000000;
 
margin: 0px 20px    /**Necessario para alinhar o nome ao icone */
`;





export const IconView_MotoIconName = styled.View`

`;
export const IconText_MotoIconName = styled.Text`
font-size: 20px;
font-family: Roboto-Bold;
text-shadow: 1px 1px 5px rgba(0, 0, 0, 0.75);
color: #000000;
/**background-color: #5666;*/
margin: 0px 10px    /**Necessario para alinhar o nome ao icone */
`;





export const IconView_DriverIconName = styled.View`

`;

export const IconText_DriverIconName = styled.Text`
font-size: 20px;
font-family: Roboto-Bold;
text-shadow: 1px 1px 5px rgba(0, 0, 0, 0.75);
color: #000000;


`;


export const IconView_GarageIconName = styled.View`

`;

export const IconText_GarageIconName = styled.Text`
font-size: 20px;
font-family: Roboto-Bold;
text-shadow: 1px 1px 5px rgba(0, 0, 0, 0.75);
color: #000000;

`;


export const IconView_ResidentialGarageIconName = styled.View`

`;

export const IconText_ResidentialGarageIconName = styled.Text`
font-size: 20px;
font-family: Roboto-Bold;
text-shadow: 1px 1px 5px rgba(0, 0, 0, 0.75);
color: #000000;
/**background-color: #5666;*/
`;

export const IconView_CommercialGarageIconName = styled.View`

`;

export const IconText_CommercialGarageIconName = styled.Text`
font-size: 20px;
font-family: Roboto-Bold;
text-shadow: 1px 1px 5px rgba(0, 0, 0, 0.75);
color: #000000;
/**background-color: #5666;*/
margin: 0px 3px     /**Necessario para alinhar o nome ao icone */
`;







/** -------------------------------------------------------------------------------------------------------------------- */







export const IconView = styled.View` /**Estilo do Icone, posicionamento e etc */

margin: 100px 0px;
width:100%;
align-items: center;
justify-content:space-evenly;
flex-direction:row;

/**background-color: #527;*/

`;

export const IconBt = styled.TouchableOpacity` /**Estilo do botão */
 
/**background-color: #597;*/

`;



export const IconImage = styled.Image` /**Icones em geral quando puxado como imagem*/
 
 width: 100px;
 height: 100px;
    
    

`;

export const IconParking = styled.Image` /**Icone exclusivo do estacionamento */
margin: 0px 26px;
width:90px;
height: 90px;

`;

