import React, { useContext } from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Home from '../pages/Home';
import New from '../pages/New';
import Profile from '../pages/Profile';
import CustomDrawer from '../components/CustomDrawer';
import { AuthContext } from '../contexts/auth';

export default function AppRoutes() {

    const AppDrawer = createDrawerNavigator();
    const { user } = useContext(AuthContext);

    return (
        <AppDrawer.Navigator
            drawerContent={(props) => <CustomDrawer {...props} />}

            drawerStyle={{
                backgroundColor: '#171717'
            }}
            drawerContentOptions={{
                labelStyle: {
                    fontWeight: 'bold'
                },
                activeTintColor: '#FFF',
                activeBackgroundColor: '#5fbff9',
                inactiveBackgroundColor: '#000',
                inactiveTintColor: '#DDD',
                itemStyle: {
                    marginVertical: 5,
                }
            }}
        >
            {user && user.tipo === 'Condutor' ?
                <AppDrawer.Screen name='Home' component={Home} options={{ headerShown: true }} /> :
                <AppDrawer.Screen name='Home' component={New} options={{ headerShown: true }} />}
            <AppDrawer.Screen name='Perfil' component={Profile} options={{ headerShown: true }} />
        </AppDrawer.Navigator>
    );
}
