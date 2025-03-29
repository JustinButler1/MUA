import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import CircleImage from '@/components/CircleImage'

const PostHeader = () => {
    return (
        <View style={styles.container}>
            <CircleImage size={35}/>
            <View style={styles.text_container}>
                <Text style={styles.account_name}>John Doe</Text>
                <Text style={styles.post_time}>2 hours ago</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        padding: 10,
    },
    text_container: {
        flex: 1,
        marginLeft: 10,
        justifyContent: 'center',
    },
    account_name: {
        fontSize: 15,
        fontWeight: 'bold',
    },
    post_time: {
        fontSize: 12,
        color: 'gray',
        marginTop: 4,
    },
});

export default PostHeader