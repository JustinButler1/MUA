import { View, Image, StyleSheet } from 'react-native';
import React from 'react'

const CircleImage = ({ size }: { size: number }) => {
    return (
        <View style={styles.container}>
            <Image 
                source={{ uri: `https://i.pravatar.cc/${size}` }} // Replace with your image URL
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
        width: 35, // Adjust the size as needed
        height: 35, // Adjust the size as needed
        borderRadius: 50, // Half of the width and height to make it circular
    },
});

export default CircleImage