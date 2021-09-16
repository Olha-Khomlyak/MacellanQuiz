import React from 'react';
import { Icon, Button } from 'react-native-elements';
import { styles, WIDTH } from '../constants/styles'
import { colors } from '../constants'
import { Dimensions} from 'react-native';



export const IconButton = (props) => {

    const {title, iconName, iconSize, iconColor, buttonColor, borderWidth, titleColor } = props

    return (
        <Button
            title={title}
            icon={
                <Icon
                    name={iconName}
                    type="font-awesome-5"
                    size={iconSize}
                    color={iconColor}
                    containerStyle={{ position: 'absolute', left: 15 }}
                />
            }
            iconPosition='right'
            buttonStyle={[styles.button, { backgroundColor: buttonColor, borderWidth: borderWidth, borderColor: colors.PURPLE, width:WIDTH*0.84 }]}
            titleStyle={[styles.textStyle, { fontSize: 21, color: titleColor, fontWeight: 'bold' }]}
        />
    );
}
