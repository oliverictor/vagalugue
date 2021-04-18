import React, { useState, useContext } from 'react';
import { SafeAreaView, Keyboard, TouchableWithoutFeedback, Alert } from 'react-native';
import { format } from 'date-fns';
import { useNavigation } from '@react-navigation/native';
import firebase from '../../services/firebaseConnection'
import Header from '../../components/Header';
import { Background, Input, SubmitButton, SubmitText, TituloView, TituloText } from './styles'
import Picker from '../../components/Picker';
import { AuthContext } from '../../contexts/auth'

export default function New() {

  const navigation = useNavigation();
  const [valor, setValor] = useState('');
  const [tipo, setTipo] = useState('carro');
  const { user: usuario } = useContext(AuthContext);

  function handleSubmit() {
    Keyboard.dismiss();
    if (isNaN(parseFloat(valor)) || tipo === null) {
      alert('Preencha todos os campos!');
      return;
    }

    Alert.alert(
      'Confirmando dados',
      `Tipo ${tipo} - Valor ${parseFloat(valor)}`,
      [
        {
          text: 'Cancelar',
          style: 'cancel'
        },
        {
          text: 'Continuar',
          onPress: () => handleAdd()
        }
      ]
    )

  }

  async function handleAdd() {
    let uid = usuario.uid;

    //atuaizar o nosso saldo 
    let user = firebase.database().ref('users').child(uid);
    await user.once('value').then(() => {

      tipo === 'carro' ? user.child('qtdVagaCarro').set(parseFloat(valor)) : user.child('qtdVagaMoto').set(parseFloat(valor));

    });

    Keyboard.dismiss();
    setValor('');
    navigation.navigate('Home');
  }

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <Background>

        <TituloView>
          <TituloText>Gerenciador de Vagas</TituloText>
        </TituloView>

        <SafeAreaView style={{ alignItems: 'center' }}>
          <Input
            placeholder='Insira a quantidade disponível no momento'
            keyboardType='numeric'
            returnKeyType='next'
            onSubmitEditing={() => Keyboard.dismiss()}
            value={valor}
            onChangeText={(text) => setValor(text)}
          />

          <Picker onChange={setTipo} tipo={tipo} />

          <SubmitButton onPress={handleSubmit}>
            <SubmitText>Registrar</SubmitText>
          </SubmitButton>
        </SafeAreaView>
      </Background>
    </TouchableWithoutFeedback>
  );
}