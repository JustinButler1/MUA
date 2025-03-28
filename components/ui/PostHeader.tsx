import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import AvatarImage from '@/components/AvatarImage'

const PostHeader = () => {
    return (
        <View style={styles.container}>
            <AvatarImage />
            <View style={styles.text_container}>
                {/* Account Name */}
                <Text style={styles.account_name}>John Doe</Text>
                {/* Post Time */}
                <Text style={styles.post_time}>2 hours ago</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row', // Align items in a row
        alignItems: 'center', // Vertically center the items
        padding: 10, // Padding around the container
        borderBottomWidth: 1, // Optional: Add a bottom border for separation
        borderBottomColor: '#ccc', // Optional: Color of the bottom border
    },
    text_container: {
        // Container for the text elements (account name and post time)
        flex: 1, // Take up remaining space after the avatar
        marginLeft: 10, // Space between avatar and text
        justifyContent: 'center', // Center vertically
        // Optional: Adjust alignment if needed
        // alignItems: 'flex-start'
    },
    account_name: {
        fontSize: 15,
        fontWeight: 'bold',
    },
    post_time: {
        fontSize: 12, // Smaller font size for the post time
        color: 'gray', // Lighter color to indicate it's a timestamp
        marginTop: 4, // Space between account name and post time
    },
});

export default PostHeader