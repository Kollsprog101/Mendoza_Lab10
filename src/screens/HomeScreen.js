import { Pressable, StyleSheet, Text, View } from 'react-native';

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.topBar}>
        <Text style={styles.appTitle}>CineVerse</Text>
      </View>

      <View style={styles.heroCard}>
        <Text style={styles.label}>Welcome</Text>
        <Text style={styles.title}>Find your next great movie night.</Text>
        <Text style={styles.subtitle}>
          Discover trending stories, critically loved picks, and favorites for every mood.
        </Text>

        <Pressable style={styles.button} onPress={() => navigation.navigate('Movies')}>
          <Text style={styles.buttonText}>Go to Movies</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f7ff',
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
  heroCard: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 24,
  },
  label: {
    color: '#f59e0b',
    fontSize: 16,
    fontWeight: '700',
    letterSpacing: 1,
    marginBottom: 10,
  },
  title: {
    fontSize: 34,
    fontWeight: '800',
    color: '#111827',
    lineHeight: 42,
    marginBottom: 12,
  },
  subtitle: {
    fontSize: 16,
    color: '#475569',
    lineHeight: 26,
    marginBottom: 26,
  },
  button: {
    backgroundColor: '#111827',
    paddingVertical: 14,
    borderRadius: 14,
    alignItems: 'center',
    width: '100%',
  },
  buttonText: {
    color: '#f8fafc',
    fontSize: 18,
    fontWeight: '700',
  },
});
