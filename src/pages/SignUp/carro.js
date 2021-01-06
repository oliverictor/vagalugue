import React, { useState, useContext } from 'react';
import { Platform, ActivityIndicator } from 'react-native';
import { AuthContext } from '../../contexts/auth';

import {
    Background,
    Container,
    AreaInput,
    Input,
    SubmitButton,
    SubmitText
} from '../SignIn/styles';

export default function SignIn() {

    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [cpf, setCpf] = useState('');
    const [marca, setMarca] = useState('');
    const [modelo, setModelo] = useState('');
    const [placa, setPlaca] = useState('');

    const { signUp, loadingAuth } = useContext(AuthContext);

    function handleSignUp() {
        signUp(email, password, nome, cpf, marca, modelo, placa);
    }

    return (
        <Background>
            <Container
                behavior={Platform.OS === 'ios' ? 'padding' : ''}
                enabled
            >

                <AreaInput>
                    <Input
                        placeholder='Nome'
                        autoCorrect={false}
                        autoCapitalize='none'
                        value={nome}
                        onChangeText={(text) => setNome(text)}
                    />
                </AreaInput>

                <AreaInput>
                    <Input
                        placeholder='Email'
                        autoCorrect={false}
                        autoCapitalize='none'
                        value={email}
                        onChangeText={(text) => setEmail(text)}
                    />
                </AreaInput>


                <AreaInput>
                    <Input
                        placeholder='Senha'
                        autoCorrect={false}
                        autoCapitalize='none'
                        value={password}
                        onChangeText={(text) => setPassword(text)}
                        secureTextEntry={true}
                    />
                </AreaInput>

                <AreaInput>
                    <Input
                        placeholder='CPF'
                        autoCorrect={false}
                        autoCapitalize='none'
                        value={cpf}
                        onChangeText={(text) => setCpf(text)}
                    />
                </AreaInput>

                <AreaInput>
                    <Input
                        placeholder='Marca'
                        autoCorrect={false}
                        autoCapitalize='none'
                        value={marca}
                        onChangeText={(text) => setMarca(text)}
                    />
                </AreaInput>

                <AreaInput>
                    <Input
                        placeholder='Modelo'
                        autoCorrect={false}
                        autoCapitalize='none'
                        value={modelo}
                        onChangeText={(text) => setModelo(text)}
                    />
                </AreaInput>

                <AreaInput>
                    <Input
                        placeholder='Placa'
                        autoCorrect={false}
                        autoCapitalize='none'
                        value={placa}
                        onChangeText={(text) => setPlaca(text)}
                    />
                </AreaInput>


                <SubmitButton onPress={handleSignUp}>
                    {
                        loadingAuth ? (
                            <ActivityIndicator size={20} color='#FFF' />
                        ) : (
                                <SubmitText>Cadastrar</SubmitText>
                            )
                    }
                </SubmitButton>

            </Container>
        </Background>
    );
}