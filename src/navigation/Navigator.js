import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StyleSheet } from 'react-native';
import LoginScreen from '../screens/LoginScreen'
import HomeScreen from '../screens/HomeScreen'
import { styles } from '../constants/styles';

const Stack = createStackNavigator();

const Navigator = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator
                initialRouteName="Login"
            >
                <Stack.Screen
                    name="Login"
                    component={LoginScreen}
                    options={{
                        title: 'Giriş Yapın',
                        headerTitleStyle: styles.headerTitleStyle,
                        headerTitleAlign: 'center'
                    }}
                />
                <Stack.Screen
                    name="Home"
                    component={HomeScreen}
                    options={{
                        title: 'Cüzdanlar',
                        headerTitleStyle: styles.headerTitleStyle,
                        headerTitleAlign: 'center'
                        
                    }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default Navigator;
