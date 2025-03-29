import { StatusBar } from 'expo-status-bar';
import { Platform, StyleSheet } from 'react-native';

import { FlatList, Text, View } from '@/components/Themed';
import ChatMessage from '@/components/ui/ChatMessage';

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28baa',
    url: 'https://placehold.co/300',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63b',
    url: 'https://placehold.co/300',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72c',
    url: 'https://placehold.co/300',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d723d',
    url: 'https://placehold.co/300',
  },
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28baa',
    url: 'https://placehold.co/300',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63b',
    url: 'https://placehold.co/300',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72c',
    url: 'https://placehold.co/300',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d723d',
    url: 'https://placehold.co/300',
  },
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28baa',
    url: 'https://placehold.co/300',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63b',
    url: 'https://placehold.co/300',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72c',
    url: 'https://placehold.co/300',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d723d',
    url: 'https://placehold.co/300',
  },
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28baa',
    url: 'https://placehold.co/300',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63b',
    url: 'https://placehold.co/300',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72c',
    url: 'https://placehold.co/300',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d723d',
    url: 'https://placehold.co/300',
  },
];

export default function ChatPage() {
  return (
    <View style={styles.container}>
      <FlatList
        contentContainerStyle={styles.flatListContainer}
        data={DATA}
        renderItem={({ item }) => <ChatMessage />}
        keyExtractor={item => item.id}
      />
      <StatusBar style={Platform.OS === 'ios' ? 'light' : 'auto'} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
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
