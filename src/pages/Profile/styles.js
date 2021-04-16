import styled from 'styled-components/native';

export const Container = styled.KeyboardAvoidingView`
flex: 1; 
align-items: center; 
justify-content: center; 
background-color: #5fbff9;
`;

export const NameView = styled.View`
align-items: center;
margin-bottom: 70; 
`;

export const NameText = styled.Text`
text-align: center;
font-size: 40px;
color: rgba(255,255,255,1);
font-weight: bold; 
`;

export const ListView = styled.View`
margin-top: 20px;
align-items: flex-start;
`;

export const ListText = styled.Text`
margin-top: 10px;
width: 90%; 
font-size: 17px; 
color: rgba(255,255,255,1);
margin-bottom: 5px;
padding: 10px; 
border-radius: 7px;
font-size: 20px; 
font-weight: bold; 
`;

export const IconView = styled.View`
align-items: center;
`;

export const Icon = styled.Image` 
margin: 0px 26px;
width:90px;
height: 90px;
`;

