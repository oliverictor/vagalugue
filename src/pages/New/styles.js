import styled from 'styled-components/native';

export const Background = styled.View`
flex: 1; 
background-color: #5fbff9;
`;

export const Input = styled.TextInput.attrs({
    placeholderTextColor: '#222'
})`
height: 50px; 
width: 90%; 
background-color: rgba(255, 255, 255, 0.9);
margin-top: 30px; 
font-size: 17px; 
`;

export const SubmitButton = styled.TouchableOpacity`
height: 50px;
width: 90%; 
margin-top: 20px; 
align-items: center; 
justify-content: center; 
background-color: #00B94A;
`;

export const SubmitText = styled.Text`
font-size: 21px; 
font-weight: bold; 
color: #FFF;
`;

export const TituloView = styled.View`
align-items: center;
margin-bottom: 70;
`;

export const TituloText = styled.Text`
text-align: center;
font-size: 40px;
color: rgba(255,255,255,1);
font-weight: bold; 
`;