import { StatusBar } from 'expo-status-bar';
import { Platform, StyleSheet } from 'react-native';

import { FlatList, Text, View } from '@/components/Themed';
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
    <View style={styles.container}>
      <FlatList
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
});
