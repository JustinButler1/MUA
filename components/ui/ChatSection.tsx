import { Pressable, StyleSheet, View, Text } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'
import CircleImage from '../CircleImage'

const ChatSection = () => {
    return (
        <View style={styles.container}>
            <Link href='/chat_page' style={styles.chat_section_container}>
                <Pressable style={styles.whole_button}>
                    <CircleImage size={60}/>
                    <View style={styles.text_container}>
                        <Text style={styles.chat_name} >Group Chat</Text>
                        <Text style={styles.chat_message} >Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum voluptatum temporibus, nisi possimus sint illum nesciunt sit animi?</Text>
                    </View>
                </Pressable>
            </Link>
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
        marginVertical: 1,
        borderStyle: 'solid',
        borderTopWidth: 1,
        borderBottomWidth: 1,
        borderColor: '#ccc',
        backgroundColor: '#f9f9f9',
        width: '100%',
    },
    whole_button: {
        padding: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        gap: 10
    },
    text_container: {
        flexDirection: 'column',
        alignItems: 'flex-start',
        justifyContent: 'center',
    },
    chat_name: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    chat_message: {
        fontSize: 14,
        color: '#555',
    },
})