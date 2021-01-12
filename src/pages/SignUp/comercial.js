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

    const [cnpj, setCnpj] = useState('');
    const [razaoSocial, setRazaoSocial] = useState('');
    const [nomeFantasia, setNomeFantasia] = useState('');
    const [endereco, setEndereco] = useState('');
    const [telefone, setTelefone] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [qtdVagaCarro, setqtdVagaCarro] = useState('');
    const [qtdVagaMoto, setqtdVagaMoto] = useState('');

    const { signUpComercial, loadingAuth } = useContext(AuthContext);

    function handleSignUp() {
        
        signUpComercial(cnpj, razaoSocial, nomeFantasia, endereco, telefone, email, senha, qtdVagaCarro, qtdVagaMoto);
    }

    return (
        <Background>
            <Container
                behavior={Platform.OS === 'ios' ? 'padding' : ''}
                enabled
            >
                <AreaInput>
                    <Input
                        placeholder='CNPJ'
                        autoCorrect={false}
                        autoCapitalize='none'
                        value={cnpj}
                        onChangeText={(text) => setCnpj(text)}
                    />
                </AreaInput>

                <AreaInput>
                    <Input
                        placeholder='Razão Social'
                        autoCorrect={false}
                        autoCapitalize='none'
                        value={razaoSocial}
                        onChangeText={(text) => setRazaoSocial(text)}
                    />
                </AreaInput>

                <AreaInput>
                    <Input
                        placeholder='Nome Fantasia'
                        autoCorrect={false}
                        autoCapitalize='none'
                        value={nomeFantasia}
                        onChangeText={(text) => setNomeFantasia(text)}
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