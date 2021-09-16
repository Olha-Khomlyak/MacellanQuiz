import React from 'react';
import { View, Text, SafeAreaView, StyleSheet, Pressable } from 'react-native';
import { styles, WIDTH, HEIGHT } from '../constants/styles'
import { colors } from '../constants'
import { Button, Input, Image } from 'react-native-elements'

const LoginScreen = (props) => {

    const goToHomeScreen = () => {
        props.navigation.navigate('Home')
    }

    return (
        <SafeAreaView style={[styles.container, { alignItems: 'center',}]}>
            <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: HEIGHT * .1 }}>
                <Image
                    source={require('../assets/fonts/images/logo.png')}
                    style={localStyles.logoStyle}
                />
            </View>
            <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                <Input
                    placeholder='5xx xxx xx xx'
                    leftIcon={{ type: 'font-awesome-5', name: 'mobile-alt', color: colors.ICON, style: { marginRight: 10 } }}
                    placeholderTextColor={colors.GREY}
                    inputStyle={{ fontSize: 20 }}
                    keyboardType='numeric'
                    maxLength={20}
                    inputContainerStyle={localStyles.inputStyle}
                />
                <Input
                    placeholder='●●●●●●●'
                    leftIcon={{ type: 'font-awesome-5', name: 'lock', color: colors.ICON , style: {marginRight:10}}}
                    
                    placeholderTextColor={colors.GREY}
                    inputStyle={{ fontSize: 20 }}
                    secureTextEntry={true}
                    inputContainerStyle={localStyles.inputStyle}
                />
            </View>
            <Pressable>
                <Text style={[localStyles.textStyle, styles.textStyle, { fontSize: 12 }]} adjustsFontSizeToFit >Şifremi Unuttum</Text>
            </Pressable>
            <Button
                title='Giriş Yap'
                buttonStyle={[styles.button, { backgroundColor: colors.PURPLE, width: WIDTH * .84, marginTop: 25 }]}
                titleStyle={[styles.textStyle, { fontSize: 21, color: colors.WHITE, fontWeight: 'bold' }]}
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
    logoStyle: {
        width: WIDTH * .34,
        height: HEIGHT * .19,
        resizeMode: 'contain'
    },
    inputStyle: {
        borderColor: colors.BORDER,
        width: WIDTH * .84
    }
})