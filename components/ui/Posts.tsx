import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import PostHeader from '@/components/ui/PostHeader'
import PostActions from '@/components/ui/PostActions';

interface PostProps {
    content?: React.ComponentType<any>;
}

const Post: React.FC<PostProps> = ({content: ContentComponent}) => {
    return (
        <View style={styles.post_container}>
            <PostHeader />
            {ContentComponent && <ContentComponent />}
            <PostActions />
        </View>
    )
}

const ImagePost = () => {
    return (
        <View>
            <Text>ImagePost</Text>
        </View>
    )
}

const TextPost = () => {
    return (
        <View>
            <Text>TextPost</Text>
        </View>
    )
}

const PollPost = () => {
    return (
        <View>
            <Text>PollPost</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    post_container: {
        alignItems: 'center',
        justifyContent: 'center',
        borderStyle: 'solid',
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        padding: 10, // Padding inside the post container
    },
});

export { ImagePost, TextPost, PollPost, Post }