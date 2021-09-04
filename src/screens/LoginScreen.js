import React from 'react';
import { View, Text, SafeAreaView, StyleSheet, Pressable } from 'react-native';
import { styles } from '../constants/styles'
import { colors } from '../constants'
import { Button, Input, Icon } from 'react-native-elements'

const LoginScreen = (props) => {

    const goToHomeScreen = () => {
        props.navigation.navigate('Home')
    }

    return (
        <SafeAreaView style={[styles.container, { padding: 10 }]}>
            <Input
                placeholder='5xx xxx xx xx'
                leftIcon={{ type: 'font-awesome-5', name: 'mobile-alt', color: colors.ICON }}
                placeholderTextColor={colors.GREY}
                inputStyle={{ fontSize: 20 }}
                keyboardType='numeric'
                maxLength={20}
                inputContainerStyle={{ borderColor: colors.BORDER }}
            />
            <Input
                placeholder='⬤⬤⬤⬤⬤⬤⬤'
                leftIcon={{ type: 'font-awesome-5', name: 'lock', color: colors.ICON }}
                placeholderTextColor={colors.GREY}
                inputStyle={{ fontSize: 20 }}
                secureTextEntry={true}
                inputContainerStyle={{ borderColor: colors.BORDER }}
            />
            <Pressable>
                <Text style={[localStyles.textStyle, styles.textStyle, { fontSize: 12 }]}>Şifremi Unuttum</Text>
            </Pressable>
            <Button
                title='Giriş Yap'
                buttonStyle={[styles.button, {backgroundColor: colors.PURPLE}]}
                titleStyle={[styles.textStyle, { fontSize: 21, color: colors.WHITE, fontWeight:'bold' }]}
                onPress={goToHomeScreen}
            />
        </SafeAreaView>
    );
}

export default LoginScreen;

const localStyles = StyleSheet.create({
    input: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    textStyle: {
        textAlign: 'center',
    },
})