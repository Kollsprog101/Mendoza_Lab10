import { Pressable, StyleSheet, Text, View } from 'react-native';
import MovieList from '../components/MovieList';

export default function CategoryScreen({ route, navigation }) {
  const { title, category } = route.params || {};

  return (
    <View style={styles.container}>
      <View style={styles.topBar}>
        <Pressable style={styles.backButton} onPress={() => navigation.goBack()}>
          <Text style={styles.backText}>←</Text>
        </Pressable>

        <Text style={styles.title}>{title || 'Movies'}</Text>
      </View>

      <MovieList title={title || 'Movies'} category={category} navigation={navigation} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8fafc',
  },
  topBar: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#1f2937',
    paddingTop: 18,
    paddingBottom: 16,
    paddingHorizontal: 16,
  },
  backButton: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: 'rgba(255,255,255,0.12)',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 10,
  },
  backText: {
    color: '#fff',
    fontSize: 22,
    fontWeight: '700',
  },
  title: {
    color: '#f8fafc',
    fontSize: 22,
    fontWeight: '700',
    flex: 1,
    textAlign: 'center',
    marginRight: 46,
  },
});
