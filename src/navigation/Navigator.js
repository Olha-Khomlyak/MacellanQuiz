import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer, CommonActions } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator, DrawerItem, DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import LoginScreen from '../screens/LoginScreen'
import HomeScreen from '../screens/HomeScreen'
import { styles } from '../constants/styles';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const AuthNavigator = () => {
    return (
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
                component={DrawerNavigator}
                options={{
                   headerShown: false
                }}
            />
        </Stack.Navigator>
    )
}

const DrawerNavigator = () => {
    return (
        <Drawer.Navigator drawerContent={props => {
            return (
                <DrawerContentScrollView {...props}>
                    <DrawerItemList {...props} />
                    <DrawerItem label="Logout" onPress={() => 
                      {  props.navigation.dispatch({
                            ...CommonActions.reset({
                                index: 0,
                                routes: [
                                    { name: 'Login' },
                                ]
                            })
                        })}
                    }/>
                </DrawerContentScrollView>
            )
        }}>
            <Drawer.Screen
                name="Home"
                component={HomeScreen}
                options={{
                    title: 'Cüzdanlar',
                    headerTitleStyle: styles.headerTitleStyle,
                    headerTitleAlign: 'center'

                }} />
        </Drawer.Navigator>
    );
}

const Navigator = () => {
    return (
        <NavigationContainer>
            <AuthNavigator />
        </NavigationContainer>
    );
}

export default Navigator;
