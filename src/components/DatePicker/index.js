import React, { useState } from 'react';
import { Platform, TouchableOpacity, Text } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import { Container } from './styles';
import { Header } from 'react-native/Libraries/NewAppScreen';

export default function DatePicker({ date, onClose, onChange }) {

    const [dateNow, setDateNow] = useState(new Date(date));

    return (
        <Container>
            {Platform.OS === 'ios' && (
                <Header>
                    <TouchableOpacity onPress={onClose}>
                        <Text>Fechar</Text>
                    </TouchableOpacity>
                </Header>
            )}
            <DateTimePicker
                value={dateNow}
                mode='date'
                display='default'
                onChange={(e, d) => {
                    const currentDate = d || dateNow;
                    setDateNow(currentDate);
                    onChange(currentDate);
                }}
                style={{ backgroundColor: 'white' }}
            />
        </Container>
    );
}