import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { FontAwesome } from '@expo/vector-icons';

interface CalendarEventCardProps {
    title: string
    startTime: string
    endTime: string
    location: string
    orgs: string[]
}

export default function CalendarEventCard(props: CalendarEventCardProps) {
    return (
        <Pressable style={styles.card}>
        {/* Time on the far left */}
        <Text style={styles.time}>
            {props.startTime}
            {'\n'}
            {props.endTime}
        </Text>

        <View style={styles.mainContainer}>
            {/* Title goes full width */}
            <Text style={styles.title}>{props.title}</Text>

            {/* Two-column layout for location & orgs */}
            <View style={styles.row}>
            {/* Left column: 40% */}
            <View style={styles.locationColumn}>
                <FontAwesome name="map-marker" size={12} color="gray" />
                <Text
                numberOfLines={1}
                ellipsizeMode="tail"
                style={styles.locationText}
                >
                {' '}{props.location}
                </Text>
            </View>

            {/* Right column: 60% */}
            <View style={styles.orgColumn}>
                <Text
                numberOfLines={1}
                ellipsizeMode="tail"
                style={styles.orgText}
                >
                Org(s): {props.orgs.join(', ')}
                </Text>
            </View>
            </View>
        </View>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    card: {
        flexDirection: 'row',
        paddingVertical: 5,
        paddingHorizontal: 10,
        backgroundColor: '#fff',
        borderRadius: 10,
        marginVertical: 5,
        width: '100%',
        alignSelf: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        alignItems: 'center',
    },
    time: {
        fontSize: 10,
        color: 'gray',
        marginRight: 10,
        textAlign: 'center',
        textAlignVertical: 'center',
    },
    mainContainer: {
        flex: 1,
        flexDirection: 'column',
    },
    title: {
        fontSize: 15,
        fontWeight: 'bold',
        marginBottom: 4,
    },
    row: {
        flexDirection: 'row',
    },
    locationColumn: {
        flex: 0.35,
        paddingRight: 8, // space between columns
        flexDirection: 'row',
    },
    locationText: {
        fontSize: 10,
        color: 'gray',
    },
    orgColumn: {
        flex: 0.65,
    },
    orgText: {
        fontSize: 10,
    },
})
