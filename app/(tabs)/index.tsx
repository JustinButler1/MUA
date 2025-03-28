import { FlatList, StyleSheet } from 'react-native';

import EditScreenInfo from '@/components/EditScreenInfo';
import { Text, View, ScrollView } from '@/components/Themed';
import { Post, ImagePost, TextPost } from '@/components/ui/Posts';


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


export default function Home() {
  const imageUrl = 'https://picsum.photos/seed/picsum/300/300';

  return (
    <View style={{ flex: 1 }}>
      <FlatList contentContainerStyle={styles.container}
        data={DATA}
        renderItem={({item}) => <ImagePost url={imageUrl} />}
        keyExtractor={item => item.id}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
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
