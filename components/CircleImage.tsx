import { View, Image, StyleSheet } from 'react-native';
import React from 'react'

const CircleImage = ({ size }: { size: number }) => {
    return (
        <View style={styles.container}>
            <Image 
                source={{ uri: `https://i.pravatar.cc/${size}` }}
                style={styles.image}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    image: {
        width: 35,
        height: 35,
        borderRadius: 50,
    },
});

export default CircleImage