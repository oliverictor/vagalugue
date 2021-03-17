import React, { useState, useContext } from 'react';
import { Platform, ActivityIndicator, ScrollView } from 'react-native';
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
    const [numero, setNumero] = useState('');
    const [bairro, setBairro] = useState('');
    const [cidade, setCidade] = useState('');
    const [estado, setEstado] = useState('');
    const [telefone, setTelefone] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [qtdVagaCarro, setqtdVagaCarro] = useState('');
    const [qtdVagaMoto, setqtdVagaMoto] = useState('');

    const { signUpResidencial, loadingAuth } = useContext(AuthContext);

    function handleSignUp() {
        signUpResidencial(cpf, nome, rg, endereco, numero, bairro, cidade, estado, telefone, email, senha, qtdVagaCarro, qtdVagaMoto);
    }

    return (
        <ScrollView>
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
                            placeholder='Numero'
                            autoCorrect={false}
                            autoCapitalize='none'
                            value={numero}
                            onChangeText={(text) => setNumero(text)}
                        />
                    </AreaInput>

                    <AreaInput>
                        <Input
                            placeholder='Bairro'
                            autoCorrect={false}
                            autoCapitalize='none'
                            value={bairro}
                            onChangeText={(text) => setBairro(text)}
                        />
                    </AreaInput>

                    <AreaInput>
                        <Input
                            placeholder='Cidade'
                            autoCorrect={false}
                            autoCapitalize='none'
                            value={cidade}
                            onChangeText={(text) => setCidade(text)}
                        />
                    </AreaInput>

                    <AreaInput>
                        <Input
                            placeholder='Estado'
                            autoCorrect={false}
                            autoCapitalize='none'
                            value={estado}
                            onChangeText={(text) => setEstado(text)}
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
        </ScrollView>
    );
}