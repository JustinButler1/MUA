import { StatusBar } from 'expo-status-bar';
import { Platform, SafeAreaView, StyleSheet } from 'react-native';

import { FlatList, View } from '@/components/Themed';
import ChatMessage from '@/components/ui/ChatMessage';

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    url: 'https://placehold.co/300',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    url: 'https://placehold.co/300',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    url: 'https://placehold.co/300',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d723',
    url: 'https://placehold.co/300',
  },
];

export default function ChatPage() {
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={DATA}
        renderItem={({ item }) => <ChatMessage />}
        keyExtractor={item => item.id}
      />
      <StatusBar style={Platform.OS === 'ios' ? 'light' : 'auto'} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
