import styled from 'styled-components/native';

export const Background = styled.View`
flex: 1; 
`;

export const Container = styled.KeyboardAvoidingView`
flex: 1; 
align-items: center; 
justify-content: center; 
background-color: #5fbff9;
`;

export const Logo = styled.Image`
width: 75%;
margin-bottom: 15px;
margin-right: 8px;
background-color: #5fbff9;
`;

export const AreaInput = styled.View`
flex-direction: row; 
color: #000000; 

`;

export const Input = styled.TextInput.attrs({
    placeholderTextColor: 'rgba(0,0,0,0.35)'
})`

background: rgba(255,255,255,1); 
margin-top: 25px;
width: 90%; 
font-size: 17px; 
color: #000000; 
margin-bottom: 5px;
padding: 10px; 
border-radius: 7px;
font-size: 20px; 
`;

export const SubmitButton = styled.TouchableOpacity`
align-items: center;
justify-content: center; 
background-color: #000000;
width: 90%;
height: 45px; 
border-radius: 7px;
margin-top: 15px;
`;

export const SubmitText = styled.Text`
font-size: 20px; 
color: #FFFF;
`;

export const Link = styled.TouchableOpacity`
margin-top: 5px; 
margin-bottom: 9px;
`;

export const LinkText = styled.Text`
color: #000000; 
font-size: 15px;
font-weight: bold;  
`;