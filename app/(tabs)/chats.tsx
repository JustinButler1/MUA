import { StyleSheet } from 'react-native';
import { FlatList, View } from '@/components/Themed';
import ChatSection from '@/components/ui/ChatSection';

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
      {/* These ChatSections should be placed inside FlatList */}
      {/* <ChatSection /> */}
      {/* <ChatSection /> */}
      {/* <ChatSection /> */}
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
