import { StyleSheet, Dimensions } from 'react-native';
import { colors, fonts } from '../constants'

const HEIGHT = Dimensions.get('window').height
const WIDTH = Dimensions.get('window').width

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
    },
    ovalBgH: {
        backgroundColor: colors.PURPLE,
        width: 50, height: 35,
        borderBottomRightRadius: 150,
        borderBottomLeftRadius: 150,
        transform: [
            { scaleX: WIDTH * .02 }
        ],
        alignSelf: 'center'
    },
})

export { styles, HEIGHT, WIDTH }