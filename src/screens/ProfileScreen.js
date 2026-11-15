import { StyleSheet, Text, View } from 'react-native';

export default function ProfileScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.topBar}>
        <Text style={styles.appTitle}>CineVerse</Text>
      </View>

      <View style={styles.profileCard}>
        <Text style={styles.greeting}>Profile</Text>
        <Text style={styles.name}>Mendoza, Collins</Text>
        <Text style={styles.info}>Student • Mobile App Development</Text>
        <Text style={styles.info}>Favorite Genre: Sci-Fi & Drama</Text>
        <Text style={styles.info}>Movie Mood: Thoughtful and thrilling</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8fafc',
  },
  topBar: {
    backgroundColor: '#1f2937',
    paddingTop: 18,
    paddingBottom: 16,
    paddingHorizontal: 20,
    alignItems: 'center',
  },
  appTitle: {
    color: '#f8fafc',
    fontSize: 28,
    fontWeight: '800',
  },
  profileCard: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 24,
  },
  greeting: {
    color: '#f59e0b',
    fontSize: 16,
    fontWeight: '700',
    marginBottom: 8,
  },
  name: {
    fontSize: 32,
    fontWeight: '800',
    color: '#111827',
    marginBottom: 10,
  },
  info: {
    fontSize: 16,
    color: '#475569',
    marginBottom: 8,
  },
});
