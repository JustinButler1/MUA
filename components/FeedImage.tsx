import { StyleSheet, Image } from 'react-native'
import React from 'react'

interface ImageComponentProps {
    url: string;
    resolution?: string;
}

const FeedImage: React.FC<ImageComponentProps> = ({ url, resolution }) => {
    return <Image style={styles.square_image} source={{ uri: url }} resizeMode="cover" alt="Post image" />;
};


const styles = StyleSheet.create({
    square_image: {
        minWidth: 350,
        maxWidth: 468,
        aspectRatio: 1,
        borderRadius: 10,
    },
})

export default FeedImage
