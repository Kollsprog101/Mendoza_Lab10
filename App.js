import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { StyleSheet } from 'react-native';

import HomeScreen from './src/screens/HomeScreen';
import MoviesScreen from './src/screens/MoviesScreen';
import ProfileScreen from './src/screens/ProfileScreen';
import CategoryScreen from './src/screens/CategoryScreen';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.safeArea}>
        <NavigationContainer>
          <Tab.Navigator
            screenOptions={({ route }) => ({
              headerShown: false,
              tabBarStyle: ['Latest', 'TopRated', 'Popular', 'Recommended'].includes(route.name)
                ? { display: 'none' }
                : {
                    backgroundColor: '#111827',
                    borderTopWidth: 0,
                    height: 72,
                    paddingTop: 8,
                  },
              tabBarActiveTintColor: '#f59e0b',
              tabBarInactiveTintColor: '#cbd5e1',
              tabBarLabelStyle: {
                fontSize: 12,
                fontWeight: '700',
              },
            })}
          >
            <Tab.Screen name="Home" component={HomeScreen} />
            <Tab.Screen name="Movies" component={MoviesScreen} />
            <Tab.Screen name="Profile" component={ProfileScreen} />
            <Tab.Screen name="Latest" component={CategoryScreen} initialParams={{ title: 'Latest', category: 'latest' }} />
            <Tab.Screen name="TopRated" component={CategoryScreen} initialParams={{ title: 'Top Rated', category: 'top-rated' }} />
            <Tab.Screen name="Popular" component={CategoryScreen} initialParams={{ title: 'Popular', category: 'popular' }} />
            <Tab.Screen name="Recommended" component={CategoryScreen} initialParams={{ title: 'Recommended', category: 'recommended' }} />
          </Tab.Navigator>
        </NavigationContainer>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#111827',
  },
});
