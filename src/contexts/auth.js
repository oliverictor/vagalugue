import React, { useState, createContext, useEffect } from 'react';
import firebase from '../services/firebaseConnection';
import AsyncStorage from '@react-native-community/async-storage';

export const AuthContext = createContext({});

function AuthProvider({ children }) {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [loadingAuth, setLoadingAuth] = useState(false);

    useEffect(() => {
        async function loadStorage() {
            const storageUser = await AsyncStorage.getItem('Auth_user');

            if (storageUser) {
                setUser(JSON.parse(storageUser));
                setLoading(false);
            }

            setLoading(false);
        }

        loadStorage();

    }, []);

    //Função para logar o usuário 
    async function signIn(email, senha) {
        setLoadingAuth(true);
        await firebase.auth().signInWithEmailAndPassword(email, senha)
            .then(async (value) => {
                let uid = value.user.uid;
                await firebase.database().ref('users').child(uid).once('value')
                    .then((snapshot) => {
                        let data = {
                            uid: uid,
                            nome: snapshot.val().nome,
                            email: value.user.email,
                            tipo: snapshot.val().tipo,
                            veiculo: snapshot.val().veiculo,
                            cpf: snapshot.val().cpf,
                            marca: snapshot.val().marca,
                            modelo: snapshot.val().modelo,
                            placa: snapshot.val().placa,
                            local: snapshot.val().local,
                            qtdVagaCarro:  snapshot.val().qtdVagaCarro, 
                            qtdVagaMoto: snapshot.val().qtdVagaMoto, 
                            locacao:  snapshot.val().locacao,
                        };

                        setUser(data);
                        storageUser(data);
                        setLoadingAuth(false);
                    })
            })
            .catch((error) => {
                alert(error.code);
                setLoadingAuth(false);
            });
    }

    //Cadastrar usuário Carro
    async function signUp(email, password, nome, cpf, marca, modelo, placa) {
        setLoadingAuth(true);
        await firebase.auth().createUserWithEmailAndPassword(email, password)
            .then(async (value) => {
                let uid = value.user.uid;
                await firebase.database().ref('users').child(uid).set({
                    saldo: 0,
                    nome: nome,
                    tipo: 'Condutor',
                    veiculo: 'Carro',
                    cpf: cpf,
                    marca: marca,
                    modelo: modelo,
                    placa: placa,
                })
                    .then(() => {
                        let data = {
                            uid: uid,
                            nome: nome,
                            email: value.user.email,
                            tipo: 'Condutor',
                            veiculo: 'Carro',
                            cpf: cpf,
                            marca: marca,
                            modelo: modelo,
                            placa: placa,
                        }
                        setUser(data);
                        storageUser(data);
                        setLoadingAuth(false);
                    })
            })
            .catch((error) => {
                alert(error.code);
                setLoadingAuth(false);
            });
    }

    //Cadastrar usuário Motocileta
    async function signUpMotocicleta(email, password, nome, cpf, marca, modelo, placa) {
        setLoadingAuth(true);
        await firebase.auth().createUserWithEmailAndPassword(email, password)
            .then(async (value) => {
                let uid = value.user.uid;
                await firebase.database().ref('users').child(uid).set({
                    saldo: 0,
                    nome: nome,
                    tipo: 'Condutor',
                    veiculo: 'Motocicleta',
                    cpf: cpf,
                    marca: marca,
                    modelo: modelo,
                    placa: placa,
                })
                    .then(() => {
                        let data = {
                            uid: uid,
                            nome: nome,
                            email: value.user.email,
                            tipo: 'Condutor',
                            veiculo: 'Motocicleta',
                            cpf: cpf,
                            marca: marca,
                            modelo: modelo,
                            placa: placa
                        }
                        setUser(data);
                        storageUser(data);
                        setLoadingAuth(false);
                    })
            })
            .catch((error) => {
                alert(error.code);
                setLoadingAuth(false);
            });
    }

    //Cadastrar usuário Comercial
    async function signUpComercial(cnpj, razaoSocial, nomeFantasia, endereco, numero, bairro, cidade, estado, telefone, email, senha, qtdVagaCarro, qtdVagaMoto) {
        setLoadingAuth(true);            
        await firebase.auth().createUserWithEmailAndPassword(email, senha)
            .then(async (value) => {
                let uid = value.user.uid;
                await firebase.database().ref('users').child(uid).set({
                    nome: nomeFantasia,
                    tipo: 'Estacionamento',
                    locacao: 'Comercial',
                    cnpj: cnpj,
                    razaoSocial: razaoSocial, 
                    local: endereco + ', ' + numero + ' - ' + bairro + ', ' + cidade + ' - ' + estado,
                    telefone: telefone, 
                    qtdVagaCarro: qtdVagaCarro, 
                    qtdVagaMoto: qtdVagaMoto,
                })
                    .then(() => {
                        let data = {
                            uid: uid,
                            nome: nomeFantasia,
                            email: value.user.email,
                            tipo: 'Estacionamento',
                            locacao: 'Comercial',
                            cnpj: cnpj,
                            razaoSocial: razaoSocial, 
                            local: endereco + ', ' + numero + ' - ' + bairro + ', ' + cidade + ' - ' + estado, 
                            telefone: telefone, 
                            qtdVagaCarro: qtdVagaCarro, 
                            qtdVagaMoto: qtdVagaMoto, 
                        }
                        setUser(data);
                        storageUser(data);
                        setLoadingAuth(false);
                    })
            })
            .catch((error) => {
                alert(error.code);
                setLoadingAuth(false);
            });
    }

    //Cadastrar usuário Residencial
    async function signUpResidencial(cpf, nome, rg, endereco, numero, bairro, cidade, estado, telefone, email, senha, qtdVagaCarro, qtdVagaMoto) {
        setLoadingAuth(true);
        await firebase.auth().createUserWithEmailAndPassword(email, senha)
            .then(async (value) => {
                let uid = value.user.uid;
                await firebase.database().ref('users').child(uid).set({
                    nome: nome,
                    tipo: 'Estacionamento',
                    locacao: 'Residencial',
                    cpf: cpf,
                    rg: rg, 
                    local: endereco + ', ' + numero + ' - ' + bairro + ', ' + cidade + ' - ' + estado, 
                    telefone: telefone, 
                    qtdVagaCarro: qtdVagaCarro, 
                    qtdVagaMoto: qtdVagaMoto

                })
                    .then(() => {
                        let data = {
                            uid: uid,
                            nome: nome,
                            email: value.user.email,
                            tipo: 'Estacionamento',
                            locacao: 'Residencial',
                            cpf: cpf,
                            rg: rg, 
                            local: endereco + ', ' + numero + ' - ' + bairro + ', ' + cidade + ' - ' + estado,
                            telefone: telefone, 
                            qtdVagaCarro: qtdVagaCarro, 
                            qtdVagaMoto: qtdVagaMoto                            
                        }
                        setUser(data);
                        storageUser(data);
                        setLoadingAuth(false);
                    })
            })
            .catch((error) => {
                alert(error.code);
                setLoadingAuth(false);
            });
    }

    async function storageUser(data) {
        await AsyncStorage.setItem('Auth_user', JSON.stringify(data));
    }

    async function signOut() {
        await firebase.auth().signOut();;
        await AsyncStorage.clear()
            .then(() => {
                setUser(null);
            })
    }

    return (
        <AuthContext.Provider value={{ signed: !!user, user, loading, loadingAuth, signUp, signUpMotocicleta, signUpComercial, signUpResidencial, signIn, signOut }}>
            {children}
        </AuthContext.Provider>
    );
}

export default AuthProvider; 