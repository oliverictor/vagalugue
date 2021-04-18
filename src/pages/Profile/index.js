import React, { useContext } from 'react';
import { AuthContext } from '../../contexts/auth';
import { Container, NameView, NameText, ListView, ListText, IconView, Icon } from './styles';

import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Fontisto from 'react-native-vector-icons/Fontisto';

export default function Profile() {

    const { user } = useContext(AuthContext);

    return (
        <Container>
            <NameView>
                <NameText>{user && user.nome}</NameText>
            </NameView>

            <IconView>
                {user && user.veiculo === 'Carro' ? <FontAwesome5 name="car" size={90} /> : null}
                {user && user.veiculo === 'Motocicleta' ? <Fontisto name="motorcycle" size={93} /> : null}
                {user && user.locacao === 'Comercial' ? <Icon source={require('../../assets/garagem2icone.png')} /> : null}
                {user && user.locacao === 'Residencial' ? <Icon source={require('../../assets/garagem1icone.png')} /> : null}
            </IconView>

            <ListView>
            {user && user.tipo === 'Condutor' ? <ListText>Tipo: {user.veiculo}</ListText> : <ListText>Tipo: {user.locacao}</ListText>} 
            {user && user.tipo === 'Condutor' ? <ListText>Placa: {user.placa}</ListText> : null} 
            {user && user.tipo === 'Condutor' ? <ListText>Marca: {user.marca}</ListText> : <ListText>Quantidade de vagas para carro: {user.qtdVagaCarro}</ListText>} 
            {user && user.tipo === 'Condutor' ? <ListText>Modelo: {user.modelo}</ListText> : <ListText>Quantidade de vagas para moto: {user.qtdVagaMoto}</ListText>} 
            </ListView>
        </Container>
    );
}