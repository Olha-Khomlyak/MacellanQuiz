import { StyleSheet } from 'react-native';
import { colors, fonts } from '../constants'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.WHITE, 
        
    },
    headerStyle: {
        width: '100%',
        borderTopWidth: 1,
        borderBottomWidth: 1,
        borderColor: colors.GREY,
        height: 48,
        marginTop: 20, justifyContent: 'center',
        alignItems: 'center'
    },
    headerTitleStyle: {
        fontFamily: fonts.DEFAUTL,
        fontSize:20,
        color: colors.PURPLE,
        fontWeight:'bold'
    },
    textStyle : {
        fontFamily: fonts.DEFAUTL,
        fontSize: 20,
        color: colors.PURPLE,
    },
    button: {
        height: 60,
        borderRadius: 30
    }
})

export { styles }