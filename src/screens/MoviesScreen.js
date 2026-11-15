import { Pressable, StyleSheet, Text, View } from 'react-native';
import { CATEGORIES } from '../data/movies';

export default function MoviesScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.topBar}>
        <Text style={styles.appTitle}>CineVerse</Text>
      </View>

      <View style={styles.headerWrap}>
        <Text style={styles.heading}>Browse by Category</Text>
      </View>

      <View style={styles.categoryList}>
        {CATEGORIES.map((category) => (
          <Pressable
            key={category.id}
            style={styles.categoryCard}
            onPress={() => navigation.navigate(category.screenName, { title: category.title, category: category.id })}
          >
            <Text style={styles.categoryTitle}>{category.title}</Text>
            <Text style={styles.categoryMeta}>Open category page</Text>
          </Pressable>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eef2ff',
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
  headerWrap: {
    paddingHorizontal: 18,
    paddingTop: 20,
    paddingBottom: 8,
  },
  heading: {
    fontSize: 26,
    fontWeight: '800',
    color: '#111827',
  },
  categoryList: {
    paddingHorizontal: 18,
    paddingTop: 8,
  },
  categoryCard: {
    backgroundColor: '#ffffff',
    borderRadius: 18,
    paddingVertical: 18,
    paddingHorizontal: 18,
    marginBottom: 14,
    shadowColor: '#000',
    shadowOpacity: 0.08,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 4 },
    elevation: 3,
  },
  categoryTitle: {
    color: '#111827',
    fontSize: 22,
    fontWeight: '700',
    marginBottom: 6,
  },
  categoryMeta: {
    color: '#64748b',
    fontSize: 14,
  },
});
