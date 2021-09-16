import React, { useState, useRef, useEffect } from 'react';
import { View, SafeAreaView, Text, Dimensions, FlatList, Animated, ImageBackground } from 'react-native';
import { styles, WIDTH, HEIGHT } from '../constants/styles'
import { colors } from '../constants'
import { Icon, Input, Button, Image } from 'react-native-elements';
import { IconButton } from '../components/IconButton'
import { PointerIcon } from '../components/PointerIcon'

const windowWidth = Dimensions.get('window').width;

const CARD_WIDTH = WIDTH * 0.8
const CARD_HEIGHT = HEIGHT * .25
const SPACER = (windowWidth - CARD_WIDTH) / 2
const HomeScreen = () => {

    useEffect(()=>{
        console.log(WIDTH);
    })

    const [activeIcon, setActiveIcon] = useState(1)
    const scrollX = useRef(new Animated.Value(0)).current
    const [currentIndex, setCurentIndex] = useState()
    const cards = [
        {
            key: 'left-spacer'
        },
        {
            key: 1,
            color: colors.ORANGE,
            text: `Kahveci Penguen`,
            iconName: 'coffee',
            hasImage: ''
        },
        {
            key: 2,
            color: colors.PINK,
            text: 'Lagina Kahvecisi',
            hasImage: '../assets/fonts/images/flower.png'

        },
        {
            key: 3,
            color: colors.GREEN,
            text: 'Kantin',
            iconName: 'coffee',
            hasImage: ''
        },
        {
            key: 'right-spacer'
        },
    ]

    const handleViewableItemsChanged = useRef(({ viewableItems, changed }) => {
        if (viewableItems.length > 0) {
            console.log(viewableItems);
            console.log(viewableItems[0].key == "left-spacer");
            setCurentIndex(viewableItems[0].key == "left-spacer" ? viewableItems[0].index + 1 : viewableItems[0].index)
        }
    }, []);
    const viewabilityConfig = {
        viewAreaCoveragePercentThreshold: 50
    }

    const renderCell = ({ children, index, style, ...props }) => {
        const zIndex = {
            zIndex: index === currentIndex ? 2 : 0,
        };
        const elevation = {
            elevation: index === currentIndex ? 2 : 0,
        };

        return <View style={[style, zIndex, elevation]} {...props}>{children}</View>;
    };

    const renderCard = ({ item, index }) => {
        if (!item.color) {
            return (
                <View style={{ width: SPACER }} />
            )
        }
        const inputRange = [
            (index - 2) * CARD_WIDTH,
            (index - 1) * CARD_WIDTH,
            index * CARD_WIDTH,
        ]
        const scaleCard = scrollX.interpolate({
            inputRange: inputRange,
            outputRange: [0.71, 1, 0.71],
        })

        const moveHorizontal = scrollX.interpolate({
            inputRange: inputRange,
            outputRange: [-CARD_WIDTH + 80, 0, CARD_WIDTH - 80],

        })

        const opacity = scrollX.interpolate({
            inputRange: inputRange,
            outputRange: [0.5, 1, 0.56],
        })

        return (
            <View style={{ width: CARD_WIDTH }}>
                <Animated.View style={{ height: CARD_HEIGHT, borderRadius: 15, justifyContent: 'space-between', backgroundColor: colors.WHITE, margin: 10, opacity, transform: [{ scaleY: scaleCard }, { translateX: moveHorizontal }] }}>
                    <View style={{ height: CARD_HEIGHT * .15, backgroundColor: item.color, borderTopRightRadius: 15, borderTopLeftRadius: 15 }}>
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', position: 'absolute', top: CARD_HEIGHT * .15 / 2, width: CARD_WIDTH - 50, alignSelf: 'center' }}>
                        {item.hasImage ?
                            <View style={{ padding: 10, backgroundColor: colors.WHITE, overflow: 'hidden', borderRadius: 50, borderWidth: 4, borderColor: item.color }}>
                                <Image
                                    source={require('../assets/fonts/images/flower.png')}
                                    style={{ width: index === currentIndex ? CARD_HEIGHT * .3 : CARD_HEIGHT * .2, aspectRatio: 1 / 1, }}
                                />
                            </View>
                            :
                            <Icon
                                name={item.iconName}
                                type='feather'
                                size={index === currentIndex ? CARD_HEIGHT * .3 : CARD_HEIGHT * .2}
                                iconStyle={{ padding: 10 }}
                                containerStyle={{ backgroundColor: colors.WHITE, overflow: 'hidden', borderRadius: 50, borderWidth: 4, borderColor: item.color }}
                            />}
                        <Text style={[styles.textStyle, { fontSize: 18, fontWeight: 'bold' }]}>{item.text}</Text>
                    </View>
                    <View style={{ height: CARD_HEIGHT * .45, width: CARD_WIDTH - 60, flexDirection: 'row', alignSelf: 'center', alignItems: 'center' }}>
                        <Text style={[styles.textStyle, { fontSize: 21, fontWeight: 'bold', marginRight: 20 }]}>4</Text>
                        <Text style={[styles.textStyle, { fontSize: 11 }]}>AKTİF KAMPANYA</Text>
                    </View>
                </Animated.View>
            </View>
        )
    }

    return (
        <SafeAreaView style={[styles.container]}>
            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingHorizontal: 10 }}>
                <Input
                    placeholder='Cüzdan Ara…'
                    leftIcon={{ type: 'font-awesome-5', name: 'search', color: colors.PURPLE, size: HEIGHT * .02 }}
                    placeholderTextColor={colors.GREY}
                    inputStyle={{ fontSize: HEIGHT * .016 }}
                    secureTextEntry={true}
                    inputContainerStyle={{ borderBottomWidth: 0 }}
                    containerStyle={{ width: WIDTH * 0.5, alignItems: 'center', height: HEIGHT * .06 }}
                />
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Text style={[styles.textStyle, { fontSize: HEIGHT * .016, fontWeight: 'bold' }]}>TÜM CÜZDANLAR</Text>
                    <Icon
                        type="font-awesome-5"
                        name='filter'
                        size={HEIGHT * .02}
                        color={colors.PURPLE}
                        containerStyle={{ marginLeft: 5 }}
                    />
                </View>
            </View>
            <View style={{ backgroundColor: colors.PURPLE, paddingTop: 20, paddingBottom: 0 }}>
                <Animated.FlatList
                    data={cards}
                    renderItem={renderCard}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    snapToInterval={CARD_WIDTH}
                    decelerationRate={5}
                    bounces={false}
                    onScroll={Animated.event(
                        [{ nativeEvent: { contentOffset: { x: scrollX } } }],
                        { useNativeDriver: true }
                    )}
                    scrollEventThrottle={16}
                    CellRendererComponent={renderCell}
                    onViewableItemsChanged={handleViewableItemsChanged.current}
                    viewabilityConfig={viewabilityConfig}
                />
            </View>
            <ImageBackground
                source={require('../assets/fonts/images/background.png')}
                style={{ width: WIDTH, height: HEIGHT * .13 }}
            >
                <View style={styles.ovalBgH} />
                <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: HEIGHT * .05 }}>
                    <IconButton
                        title='Kampanyalar'
                        iconName='gift'
                        iconSize={25}
                        iconColor={colors.ORANGE}
                        buttonColor={colors.WHITE}
                        borderWidth={2}
                        titleColor={colors.PURPLE}
                    />
                </View>
            </ImageBackground>
            <View style={{ alignItems: 'center', marginTop: 50}}>
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
            <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', marginTop: HEIGHT * .03 }}>
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