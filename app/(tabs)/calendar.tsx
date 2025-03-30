import { StyleSheet } from 'react-native';
import { FlatList, Text, View } from '@/components/Themed';
import CalendarEventCard from '@/components/ui/CalendarEventCard';
import FontAwesome from '@expo/vector-icons/FontAwesome';

const DATA = [
  {
    id: '1',
    title: 'Yardshow',
    location: 'KU Boll Theatre',
    date: 'Monday',
    startTime: '7:00PM',
    endTime: '9:30PM',
    orgs: ['NPHC'],
  },
  {
    id: '2',
    title: 'Step Show',
    location: 'KU Boll Theatre',
    date: 'Tuesday',
    startTime: '7:00PM',
    endTime: '9:30PM',
    orgs: ['NPHC'],
  },
  {
    id: '3',
    title: 'Game Night',
    location: 'VWK 101',
    date: 'Wednesday',
    startTime: '12:00PM',
    endTime: '1:00PM',
    orgs: ['BATU', 'AAA', 'EOL'],
  },
  {
    id: '4',
    title: 'Cookout',
    location: 'KU Boll Theatre',
    date: 'Wednesday',
    startTime: '12:00PM',
    endTime: '1:00PM',
    orgs: ['BATU'],
  },
  {
    id: '5',
    title: 'Hangar Hangout',
    location: 'Hangar',
    date: 'Wednesday',
    startTime: '1:15PM',
    endTime: '2:15PM',
    orgs: ['BATU', 'AAA', 'EOL', 'NPHC'],
  },
  {
    id: '6',
    title: 'Talent Show',
    location: 'KU Boll Theatre',
    date: 'Wednesday',
    startTime: '6:00PM',
    endTime: '7:30PM',
    orgs: ['BATU', 'NPHC'],
  },
  {
    id: '7',
    title: 'Cookies & Cocoa',
    location: 'Amphitheatre',
    date: 'Thursday',
    startTime: '3:00PM',
    endTime: '5:00PM',
    orgs: ['AAA', 'EOL'],
  },
  {
    id: '8',
    title: 'Hot Pot',
    location: 'KU Central Mall',
    date: 'Thursday',
    startTime: '5:00PM',
    endTime: '7:00PM',
    orgs: ['BATU', 'AAA', 'EOL', 'NPHC', 'MGC', 'WORD'],
  },
  {
    id: '9',
    title: 'Event 9',
    location: 'KU111',
    date: 'Friday',
    startTime: '1:00PM',
    endTime: '2:00PM',
    orgs: ['NPHC', 'MGC'],
  },
  {
    id: '10',
    title: 'Event 10',
    location: 'KU222',
    date: 'Friday',
    startTime: '3:00PM',
    endTime: '4:00PM',
    orgs: ['MGC'],
  },
  {
    id: '11',
    title: 'Event 11',
    location: 'KU233',
    date: 'Friday',
    startTime: '5:00PM',
    endTime: '6:00PM',
    orgs: ['WORD'],
  },
];

export default function Calendar() {
  return (
    <View style={styles.container}>
      <View style={styles.week_selector}>
        <FontAwesome.Button name="arrow-left" backgroundColor={'transparent'} color={'black'}/>
        <Text style={styles.week_text}>Mar 22 - Mar 29</Text>
        <FontAwesome.Button name="arrow-right" backgroundColor={'transparent'} color={'black'}/>
      </View>
      <FlatList style={{ width: '100%' }}
        data={DATA}
        renderItem={({ item, index }) => {
          return (
            <>
              {index === 0 &&
                <Text style={styles.day} >{item.date}</Text>
              }
              { index > 0 && DATA[index-1].date !== item.date &&
                <Text style={styles.day} >{item.date}</Text>
              }
              <CalendarEventCard
                title={item.title}
                location={item.location}
                orgs={item.orgs}
                startTime={item.startTime}
                endTime={item.endTime}
              />
              { index < DATA.length-1 && DATA[index+1].date !== item.date &&
                <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
              }
            </>
          )
        }}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  week_selector: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  week_text: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000',
  },
  container: {
    flex: 1,
    justifyContent: 'flex-start',
  },
  day: {
    fontSize: 18,
    fontWeight: 'bold',
    alignSelf: 'flex-start',
    marginLeft: 20,
    marginBottom: 10,
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
    alignSelf: 'center',
  },
});
