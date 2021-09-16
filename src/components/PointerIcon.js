import React from 'react';
import { View, Dimensions } from 'react-native';
import { Icon, Button } from 'react-native-elements';
import { styles } from '../constants/styles'
import { colors } from '../constants'

const windowWidth = Dimensions.get('window').width;


export const PointerIcon = (props) => {

    const { iconName, active, key, onPress} = props

    return (
        <View style={{ width: windowWidth * 0.16, justifyContent: 'center', alignItems: 'center' }} key = {key}>
            <Icon
                type="ionicon"
                name='triangle'
                size={windowWidth * 0.03}
                color={active ? colors.PURPLE : 'transparent'}
            />
            <Icon
                type="font-awesome-5"
                name={iconName}
                size={windowWidth * 0.07}
                raised
                reverse
                reverseColor={active ? colors.WHITE : colors.PURPLE}
                color={active ? colors.PURPLE : colors.WHITE}
                containerStyle={{ position: 'absolute', top: 1, alignSelf: 'center',
                    shadowColor: "#00000",
                    shadowOffset: {
                        width: 0,
                        height: 2,
                    },
                    shadowOpacity: 0.14,
                    shadowRadius: 3.84,
                    elevation: 5,
                    backgroundColor:"#000"
             }}
                onPress={onPress}
            />

        </View>
    );
}

