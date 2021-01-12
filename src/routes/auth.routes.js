import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Splash from '../pages/Splash';
import SignIn from '../pages/SignIn';
import Options from '../pages/Options';
import Vehicles from '../pages/Vehicles';
import Parking from '../pages/Parking';
import carro from '../pages/SignUp/carro';
import motocicleta from '../pages/SignUp/motocicleta';
import residencial from '../pages/SignUp/residencial';
import comercial from '../pages/SignUp/comercial';


const AuthStack = createStackNavigator();

function AuthRoutes() {
    return (
        <AuthStack.Navigator>

            <AuthStack.Screen
                name='Splash'
                component={Splash}
                options={{ headerShown: false }}
            />

            <AuthStack.Screen
                name='SignIn'
                component={SignIn}
                options={{ headerShown: false }}
            />

            <AuthStack.Screen
                name='Options'
                component={Options}
                options={{
                    headerStyle: {
                        backgroundColor: '#131313',
                        borderBottomWidth: 1,
                        borderBottomColor: '#00B94A'
                    },
                    headerTintColor: '#FFF',
                    headerBackTitleVisible: false,
                    headerTitle: 'Voltar'
                }}
            />

            <AuthStack.Screen
                name='Vehicles'
                component={Vehicles}
                options={{
                    headerStyle: {
                        backgroundColor: '#131313',
                        borderBottomWidth: 1,
                        borderBottomColor: '#00B94A'
                    },
                    headerTintColor: '#FFF',
                    headerBackTitleVisible: false,
                    headerTitle: 'Voltar'
                }}
            />

            <AuthStack.Screen
                name='Parking'
                component={Parking}
                options={{
                    headerStyle: {
                        backgroundColor: '#131313',
                        borderBottomWidth: 1,
                        borderBottomColor: '#00B94A'
                    },
                    headerTintColor: '#FFF',
                    headerBackTitleVisible: false,
                    headerTitle: 'Voltar'
                }}
            />

            <AuthStack.Screen
                name='carro'
                component={carro}
                options={{
                    headerStyle: {
                        backgroundColor: '#131313',
                        borderBottomWidth: 1,
                        borderBottomColor: '#00B94A'
                    },
                    headerTintColor: '#FFF',
                    headerBackTitleVisible: false,
                    headerTitle: 'Voltar'
                }}
            />

            <AuthStack.Screen
                name='motocicleta'
                component={motocicleta}
                options={{
                    headerStyle: {
                        backgroundColor: '#131313',
                        borderBottomWidth: 1,
                        borderBottomColor: '#00B94A'
                    },
                    headerTintColor: '#FFF',
                    headerBackTitleVisible: false,
                    headerTitle: 'Voltar'
                }}
            />

            <AuthStack.Screen
                name='residencial'
                component={residencial}
                options={{
                    headerStyle: {
                        backgroundColor: '#131313',
                        borderBottomWidth: 1,
                        borderBottomColor: '#00B94A'
                    },
                    headerTintColor: '#FFF',
                    headerBackTitleVisible: false,
                    headerTitle: 'Voltar'
                }}
            />

            <AuthStack.Screen
                name='comercial'
                component={comercial}
                options={{
                    headerStyle: {
                        backgroundColor: '#131313',
                        borderBottomWidth: 1,
                        borderBottomColor: '#00B94A'
                    },
                    headerTintColor: '#FFF',
                    headerBackTitleVisible: false,
                    headerTitle: 'Voltar'
                }}
            />

        </AuthStack.Navigator>
    );
}

export default AuthRoutes; 