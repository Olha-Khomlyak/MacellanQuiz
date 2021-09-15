import React, { useState, useRef } from 'react';
import { View, SafeAreaView, Text, Dimensions, FlatList, Animated } from 'react-native';
import { styles } from '../constants/styles'
import { colors } from '../constants'
import { Icon, Input, Button } from 'react-native-elements';
import { IconButton } from '../components/IconButton'
import { PointerIcon } from '../components/PointerIcon'

const windowWidth = Dimensions.get('window').width;

const CARD_WIDTH = windowWidth * 0.70
const SPACER = (windowWidth - CARD_WIDTH) / 2
const HomeScreen = () => {

    const [activeIcon, setActiveIcon] = useState(1)
    const scrollX = useRef(new Animated.Value(0)).current
    const [currentIndex, setCurentIndex] = useState()
    const cards = [
        {
            key: 'left-spacer'
        },
        {
            key: 1,
            color: 'yellow',
            text: 'CARD_1'
        },
        {
            key: 2,
            color: 'blue',
            text: 'CARD_2'
        },
        {
            key: 3,
            color: 'green',
            text: 'CARD_3'
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
        viewAreaCoveragePercentThreshold: 70
    }

    const renderCell = ({ children, index, style, ...props }) => {
        const zIndex = {
            zIndex: index === currentIndex ? 2 : 0,
        };

        return <View style={[style, zIndex]} {...props}>{children}</View>;
    };

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
            <View style={{ backgroundColor: colors.PURPLE }}>
                <Animated.FlatList
                    data={cards}
                    renderItem={({ item, index }) => {
                        if(!item.color) {
                            return (
                                <View style={{width:SPACER}}/>
                            )
                        }
                        const inputRange = [
                            (index - 2) * CARD_WIDTH,
                            (index - 1) * CARD_WIDTH,
                            index * CARD_WIDTH,
                        ]
                        const scaleCard = scrollX.interpolate({
                            inputRange: inputRange,
                            outputRange:[0.7, 1, 0.7],
                        })

                        const moveHorizontal = scrollX.interpolate({
                            inputRange: inputRange,
                            outputRange:[-50, 0, 50],
                            extrapolate:'clamp'
                        })
                        return (
                            <View style={{ width: CARD_WIDTH}}>
                            <Animated.View style={{  height: 200, borderRadius: 30, backgroundColor: item.color, margin: 10, transform:[{scaleY: scaleCard}, {translateX: moveHorizontal}] }}>
                                <Text>{item.text}</Text>
                            </Animated.View>
                            </View>
                        )
                    }}
                    horizontal
                    snapToInterval={CARD_WIDTH}
                    decelerationRate={0}
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
            <View style={{ alignItems: 'center' }}>
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