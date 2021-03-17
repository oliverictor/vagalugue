import React, { Component } from 'react';
import { Container, TypeTitle, TypeDescription, TypeImage, RequestButton, RequestButtonText } from './styles';
import logo from '../../assets/uberx.png';

export default class Details extends Component {
    render() {
        return (
            <Container>
                <TypeTitle>Vagalugue</TypeTitle>
                <TypeDescription>Procure o estacionamento mais próximo!</TypeDescription>

                <TypeImage source={logo} />
                <TypeTitle>Segurança e flexibilidade</TypeTitle>
                <TypeDescription>O jeito mais fácil de se encontrar um vaga</TypeDescription>

                <RequestButton onPress={() => { }}>
                    <RequestButtonText>Entre em contato via whatsApp</RequestButtonText>
                </RequestButton>
            </Container>
        );
    }
}