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

    const [cnpj, setCnpj] = useState('');
    const [razaoSocial, setRazaoSocial] = useState('');
    const [nomeFantasia, setNomeFantasia] = useState('');
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

    const { signUpComercial, loadingAuth } = useContext(AuthContext);

    function handleSignUp() {

        signUpComercial(cnpj, razaoSocial, nomeFantasia, endereco, numero, bairro, cidade, estado, telefone, email, senha, qtdVagaCarro, qtdVagaMoto);
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