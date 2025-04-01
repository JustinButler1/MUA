import { Pressable, StyleSheet, Text, View } from 'react-native'
import React, { FC } from 'react'

interface CalendarEventCardProps {
    title: string;
    startTime: string;
    endTime: string;
    location: string;
    orgs: string[];
}

const CalendarEventCard:FC<CalendarEventCardProps> = (props) => {
    return (
        <Pressable style={styles.card}>
            <Text style={styles.time}>{`${props.startTime}\n${props.endTime}`}</Text>
            <View style={styles.main_container}>
                <Text style={styles.title}>{props.title}</Text>
                <View style={styles.meta_data}>
                    <Text numberOfLines={1} style={styles.location}>Location: {props.location}</Text>
                    <Text numberOfLines={1} ellipsizeMode='tail' style={styles.orgs}>Org(s): {props.orgs.join(', ')}</Text>
                </View>
            </View>
        </Pressable>
    )
}

export default CalendarEventCard

const styles = StyleSheet.create({
    card: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        paddingVertical: 5,
        paddingHorizontal: 10,
        backgroundColor: '#fff',
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        marginVertical: 5,
        width: '100%',
        alignSelf: 'center',
    },
    meta_data: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        gap: 10,
        maxWidth: '100%',
    },
    main_container: {
        flexDirection: 'column',
        gap: 5,
    },
    title: {
        fontSize: 15,
        fontWeight: 'bold',
        alignSelf: 'flex-start',
    },
    time: {
        fontSize: 10,
        color: 'gray',
        marginRight: 10,
        textAlign: 'center',
    },
    location: {
        fontSize: 10,
        color: 'gray',
    },
    orgs: {
        fontSize: 10,
        // flex: 1,
    }
})