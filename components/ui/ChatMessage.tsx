import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import CircleImage from '../CircleImage'

const ChatMessage = () => {
    return (
        <View style={styles.container}>
            <CircleImage size={35}/>
            <View style={styles.text_container}>
                <Text style={styles.account_name}>John Doe</Text>
                <Text style={styles.chat_text}>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro, veritatis maxime. Ullam minus dicta accusantium cum dolorum? Aliquam soluta voluptates hic quia, saepe culpa maxime, harum explicabo temporibus eius expedita!
                </Text>
            </View>
        </View>
    )
}

export default ChatMessage

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        padding: 10,
    },
    text_container: {
        flex: 1,
        marginLeft: 10,
        justifyContent: 'center',
    },
    account_name: {
        fontSize: 12,
        fontWeight: 'bold',
    },
    chat_text: {
        fontSize: 15,
        color: 'black',
        marginTop: 4,
    },
})