import { ScrollView, StyleSheet, Text, View } from 'react-native';
import MovieCard from './MovieCard';
import { MOVIES } from '../data/movies';

export default function MovieList({ title, category, navigation }) {
  const filtered = MOVIES.filter((movie) => movie.categories.includes(category));

  return (
    <View style={styles.wrapper}>
      <Text style={styles.heading}>{title}</Text>
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContent}>
        {filtered.map((movie) => (
          <MovieCard key={movie.id} movie={movie} navigation={navigation} />
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    paddingHorizontal: 14,
    paddingTop: 8,
  },
  heading: {
    fontSize: 22,
    fontWeight: '800',
    color: '#1f2937',
    marginBottom: 14,
  },
  scrollContent: {
    paddingBottom: 26,
  },
});
