import React, { Component, useState } from 'react';
import { Logo, Background, TextLogo } from './styles';

export default class Splash extends Component {

    constructor(props) {
        super(props);
        setTimeout(() => {
            this.props.navigation.navigate('SignIn');
        }, 5000);
        //this.props.setLoadingAuth = useState(false);
    }
    render() {
        return (
            <Background>
                <Logo source={require('../../assets/Logo.png')} />
                <TextLogo>Vagalugue</TextLogo>
            </Background>
        );
    }
}