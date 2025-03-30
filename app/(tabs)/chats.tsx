import { StyleSheet } from 'react-native';
import { FlatList, View } from '@/components/Themed';
import ChatSection from '@/components/ui/ChatSection';

const DATA = [
  {
    id: '1',
    url: 'https://placehold.co/300',
  },
  {
    id: '2',
    url: 'https://placehold.co/300',
  },
  {
    id: '3',
    url: 'https://placehold.co/300',
  },
  {
    id: '4',
    url: 'https://placehold.co/300',
  },
  {
    id: '5',
    url: 'https://placehold.co/300',
  },
  {
    id: '6',
    url: 'https://placehold.co/300',
  },
  {
    id: '7',
    url: 'https://placehold.co/300',
  },
  {
    id: '8',
    url: 'https://placehold.co/300',
  },
  {
    id: '9',
    url: 'https://placehold.co/300',
  },
  {
    id: '10',
    url: 'https://placehold.co/300',
  },
  {
    id: '12',
    url: 'https://placehold.co/300',
  },
  {
    id: '13',
    url: 'https://placehold.co/300',
  },
  {
    id: '14',
    url: 'https://placehold.co/300',
  },
  {
    id: '15',
    url: 'https://placehold.co/300',
  },
  {
    id: '16',
    url: 'https://placehold.co/300',
  },
  {
    id: '17',
    url: 'https://placehold.co/300',
  },
];

export default function Chats() {
  return (
    <View style={styles.container}>
      <FlatList
        contentContainerStyle={styles.flatListContainer}
        data={DATA}
        renderItem={({ item }) => <ChatSection />}
        keyExtractor={item => item.id}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%', // Ensuring the container takes up full width
  },
  flatListContainer: {
    flexGrow: 1,
    width: '100%', // Make sure the FlatList content container uses full width
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
