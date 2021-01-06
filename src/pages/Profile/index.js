import React, { useContext } from 'react';
import { AuthContext } from '../../contexts/auth';
import { Container, NameView, NameText, ListView, ListText } from './styles';

export default function Profile() {

    const { user } = useContext(AuthContext);

    return (
        <Container>
            <NameView>
                <NameText>{user && user.nome}</NameText>
            </NameView>

            <ListView>
                <ListText>Placa: {user && user.placa}</ListText>
                <ListText>Marca: {user && user.marca}</ListText>
                <ListText>Modelo: {user && user.modelo}</ListText>
                <ListText>Tipo: {user && user.veiculo}</ListText>
            </ListView>
        </Container>
    );
}