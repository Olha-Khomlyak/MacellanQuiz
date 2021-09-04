import React, { useState } from 'react';
import { View, SafeAreaView, Text, Dimensions } from 'react-native';
import { styles } from '../constants/styles'
import { colors } from '../constants'
import { Icon, Input, Button } from 'react-native-elements';
import { IconButton } from '../components/IconButton'
import { PointerIcon } from '../components/PointerIcon'

const windowWidth = Dimensions.get('window').width;


const HomeScreen = () => {

    const [activeIcon, setActiveIcon] = useState(1)

    return (
        <SafeAreaView style={[styles.container]}>
            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingHorizontal: 10 }}>
                <Input
                    placeholder='Cüzdan Ara…'
                    leftIcon={{ type: 'font-awesome-5', name: 'search', color: colors.PURPLE, size: 11 }}
                    placeholderTextColor={colors.GREY}
                    inputStyle={{ fontSize: 11 }}
                    secureTextEntry={true}
                    inputContainerStyle={{ borderBottomWidth: 0 }}
                    containerStyle={{ width: windowWidth * 0.5, alignItems: 'center', height: 45 }}
                />
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Text style={[styles.textStyle, { fontSize: 11, fontWeight: 'bold' }]}>TÜM CÜZDANLAR</Text>
                    <Icon
                        type="font-awesome-5"
                        name='filter'
                        size={15}
                        color={colors.PURPLE}
                        containerStyle={{ marginLeft: 5 }}
                    />
                </View>
            </View>
            <View style={{ height: 190, backgroundColor: colors.PURPLE }}>

            </View>
            <View style={{alignItems:'center'}}>
                <IconButton
                    title='Kampanyalar'
                    iconName='gift'
                    iconSize={25}
                    iconColor={colors.ORANGE}
                    buttonColor={colors.WHITE}
                    borderWidth={2}
                    titleColor={colors.PURPLE}
                />
                <IconButton
                    title='Cüzdan Ekle'
                    iconName='wallet'
                    iconSize={25}
                    iconColor={colors.WHITE}
                    buttonColor={colors.PURPLE}
                    borderWidth={0}
                    titleColor={colors.WHITE}
                />
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-evenly' }}>
                <PointerIcon
                    iconName='wallet'
                    active={activeIcon == 1 ? true : false}
                    onPress={() => setActiveIcon(1)}
                />
                <PointerIcon
                    iconName='credit-card'
                    active={activeIcon == 2 ? true : false}
                    onPress={() => setActiveIcon(2)}

                />
                <PointerIcon
                    iconName='cloud-upload-alt'
                    active={activeIcon == 3 ? true : false}
                    onPress={() => setActiveIcon(3)}
                />
                <PointerIcon
                    iconName='history'
                    active={activeIcon == 4 ? true : false}
                    onPress={() => setActiveIcon(4)}
                />
            </View>

        </SafeAreaView>
    );
}

export default HomeScreen;