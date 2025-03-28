import { StyleSheet, Text, Touchable, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'

const ChatSection = () => {
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.chat_section_container}>
                <Link href='/chat_page'>Click</Link>
            </TouchableOpacity>
        </View>
    )
}

export default ChatSection

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
    },
    chat_section_container: {
        padding: 10,
        marginVertical: 5,
        borderStyle: 'solid',
        borderTopWidth: 1,
        borderBottomWidth: 1,
        borderColor: '#ccc',
        backgroundColor: '#f9f9f9',
        width: '100%',
    },
})