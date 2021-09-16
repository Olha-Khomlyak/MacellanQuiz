import 'react-native-gesture-handler';
import React from 'react';
import { View } from 'react-native';
import { NavigationContainer, CommonActions } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator, DrawerItem, DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import LoginScreen from '../screens/LoginScreen'
import HomeScreen from '../screens/HomeScreen'
import { styles } from '../constants/styles';
import { Icon, Badge } from 'react-native-elements'
import { colors } from '../constants';

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
        <Drawer.Navigator

            drawerContent={props => {
                return (
                    <DrawerContentScrollView {...props}>
                        <DrawerItemList {...props}
                        />
                        <DrawerItem label="Logout" onPress={() => {
                            props.navigation.dispatch({
                                ...CommonActions.reset({
                                    index: 0,
                                    routes: [
                                        { name: 'Login' },
                                    ]
                                })
                            })
                        }
                        } />
                    </DrawerContentScrollView>
                )
            }}>
            <Drawer.Screen
                name="Home"
                component={HomeScreen}
                options={{
                    title: 'Cüzdanlar',
                    headerTitleStyle: styles.headerTitleStyle,
                    headerTitleAlign: 'center',
                    headerTintColor: colors.PURPLE,
                    drawerActiveTintColor: colors.PURPLE,
                    headerRight: () => {
                        return (
                            <View>
                                <Icon
                                    type="font-awesome-5"
                                    name='bell'
                                    solid
                                    size={20}
                                    color={colors.PURPLE}
                                    iconStyle={{ marginRight: 10 }}
                                />
                                <Badge
                                    status="error"
                                    containerStyle={{ position: 'absolute', bottom: 3, left: -3 }}
                                    badgeStyle={{ backgroundColor: colors.ORANGE }}
                                />
                            </View>
                        )
                    }

                }}
            />
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
