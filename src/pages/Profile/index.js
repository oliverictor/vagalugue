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
                {user.veiculo === 'Carro' ? <FontAwesome5 name="car" size={90} /> : null}
                {user.veiculo === 'Moto' ? <Fontisto name="motorcycle" size={93} /> : null}
                {user.locacao === 'Comercial' ? <Icon source={require('../../assets/garagem2icone.png')} /> : null}
                {user.locacao === 'Residencial' ? <Icon source={require('../../assets/garagem1icone.png')} /> : null}
            </IconView>

            <ListView>
            {user.tipo === 'Condutor' ? <ListText>Tipo: {user && user.veiculo}</ListText> : <ListText>Tipo: {user && user.locacao}</ListText>} 
            {user.tipo === 'Condutor' ? <ListText>Placa: {user && user.placa}</ListText> : null} 
            {user.tipo === 'Condutor' ? <ListText>Marca: {user && user.marca}</ListText> : <ListText>Quantidade de vagas para carro: {user && user.qtdVagaCarro}</ListText>} 
            {user.tipo === 'Condutor' ? <ListText>Modelo: {user && user.modelo}</ListText> : <ListText>Quantidade de vagas para moto: {user && user.qtdVagaMoto}</ListText>} 
            </ListView>
        </Container>
    );
}