import { Pressable, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import Icon from '@expo/vector-icons/FontAwesome';
import React from 'react'

const PostActions = () => {
    return (
        <View style={styles.button_container}>
            <TouchableOpacity>
                <Icon name="heart-o" size={20} color="black" style={styles.icon} />
            </TouchableOpacity>
            <TouchableOpacity>
                <Icon name="comment-o" size={20} color="black" style={styles.icon} />
            </TouchableOpacity>
            <TouchableOpacity>
                <Icon name="bell-o" size={20} color="black" style={styles.icon} />
            </TouchableOpacity>
            <TouchableOpacity>
                <Icon name="share" size={20} color="black" style={styles.icon} />
            </TouchableOpacity>
        </View>
    )
}

export default PostActions

const styles = StyleSheet.create({
    button_container: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        padding: 10,
    },
    icon: {
        marginRight: 10,
    },
})