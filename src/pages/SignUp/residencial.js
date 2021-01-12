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

    const [cpf, setCpf] = useState('');
    const [nome, setNome] = useState('');
    const [rg, setRg] = useState('');
    const [endereco, setEndereco] = useState('');
    const [telefone, setTelefone] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [qtdVagaCarro, setqtdVagaCarro] = useState('');
    const [qtdVagaMoto, setqtdVagaMoto] = useState('');

    const { signUpResidencial, loadingAuth } = useContext(AuthContext);

    function handleSignUp() {
        signUpResidencial(cpf, nome, rg, endereco, telefone, email, senha, qtdVagaCarro, qtdVagaMoto);
    }

    return (
        <Background>
            <Container
                behavior={Platform.OS === 'ios' ? 'padding' : ''}
                enabled
            >

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
                        placeholder='Nome Completo'
                        autoCorrect={false}
                        autoCapitalize='none'
                        value={nome}
                        onChangeText={(text) => setNome(text)}
                    />
                </AreaInput>
                
                <AreaInput>
                    <Input
                        placeholder='R.G.'
                        autoCorrect={false}
                        autoCapitalize='none'
                        value={rg}
                        onChangeText={(text) => setRg(text)}
                    />
                </AreaInput>

                <AreaInput>
                    <Input
                        placeholder='Endereço'
                        autoCorrect={false}
                        autoCapitalize='none'
                        value={endereco}
                        onChangeText={(text) => setEndereco(text)}
                    />
                </AreaInput>

                <AreaInput>
                    <Input
                        placeholder='Telefone'
                        autoCorrect={false}
                        autoCapitalize='none'
                        value={telefone}
                        onChangeText={(text) => setTelefone(text)}
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
                        value={senha}
                        onChangeText={(text) => setSenha(text)}
                        secureTextEntry={true}
                    />
                </AreaInput>

                <AreaInput>
                    <Input
                        placeholder='Quantidade Vagas Carro'
                        autoCorrect={false}
                        autoCapitalize='none'
                        value={qtdVagaCarro}
                        onChangeText={(text) => setqtdVagaCarro(text)}
                    />
                </AreaInput>

                <AreaInput>
                    <Input
                        placeholder='Quantidade Vagas Motocicleta'
                        autoCorrect={false}
                        autoCapitalize='none'
                        value={qtdVagaMoto}
                        onChangeText={(text) => setqtdVagaMoto(text)}
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