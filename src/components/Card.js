import React from 'react';

const Card = () => {
    return (
        <View style={{ width: CARD_WIDTH }}>
            <Animated.View style={{ height: 200, borderRadius: 30, backgroundColor: item.color, margin: 10, transform: [{ scaleY: scaleCard }, { translateX: moveHorizontal }] }}>
                <Text>{item.text}</Text>
            </Animated.View>
        </View>
    );
}

export default Card;