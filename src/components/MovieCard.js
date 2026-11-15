import { Image, StyleSheet, Text, View } from 'react-native';

export default function MovieCard({ movie }) {
  return (
    <View style={styles.card}>
      <Image source={{ uri: movie.image }} style={styles.poster} resizeMode="cover" />
      <View style={styles.info}>
        <Text style={styles.title}>{movie.title}</Text>
        <Text style={styles.meta}>{movie.year} • ⭐ {movie.rating}</Text>
        <Text style={styles.description} numberOfLines={3}>
          {movie.desc}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    backgroundColor: '#f9fafb',
    borderRadius: 18,
    padding: 12,
    marginBottom: 14,
    shadowColor: '#000',
    shadowOpacity: 0.08,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 3 },
    elevation: 3,
  },
  poster: {
    width: 86,
    height: 118,
    borderRadius: 12,
    marginRight: 12,
  },
  info: {
    flex: 1,
    justifyContent: 'center',
  },
  title: {
    fontSize: 18,
    fontWeight: '700',
    color: '#0f172a',
    marginBottom: 4,
  },
  meta: {
    fontSize: 12,
    color: '#f59e0b',
    fontWeight: '600',
    marginBottom: 6,
  },
  description: {
    color: '#475569',
    fontSize: 13,
    lineHeight: 18,
  },
});
