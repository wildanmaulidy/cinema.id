import React, { useState } from 'react';
import { StyleSheet, useColorScheme, View, TouchableOpacity, Text, ImageBackground } from 'react-native';
import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import Register from './screens/register';
import Beranda from './screens/beranda';
import Profile from './screens/profile';
import Tiket from './screens/tiket';
import Admin from './screens/admin';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const App = () => {
  const colorScheme = useColorScheme();
  const [isDarkMode, setIsDarkMode] = useState(colorScheme === 'dark');

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  const theme = isDarkMode ? DarkTheme : DefaultTheme;

  return (
    <ImageBackground 
      source={require('./assets/images/bg.jpg')} 
      style={styles.backgroundImage}
    >
      <NavigationContainer theme={theme}>
        <Stack.Navigator initialRouteName="Register">
          <Stack.Screen
            name="Register"
            component={Register}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="SINEMA.ID"
            component={MyTabs}
            options={{
              headerTitleAlign: 'center',
              headerStyle: {
                backgroundColor: isDarkMode ? '#333333' : 'blue', 
              },
              headerTintColor: '#fff', 
              headerTitleStyle: {
                fontSize: 20,
                fontWeight: 'bold',
              },
              headerRight: () => (
                <View style={{ flexDirection: 'row', marginRight: 10 }}>
                  <TouchableOpacity onPress={toggleDarkMode} style={styles.modeButton}>
                    <Text style={styles.modeButtonText}>{isDarkMode ? '🌞 Mode' : '🌙 Mode'}</Text>
                  </TouchableOpacity>
                </View>
              ),
            }}
          />
          <Stack.Screen
            name="chatAdmin"
            component={Admin}
            options={{
              headerTitleAlign: 'center',
              headerStyle: {
                backgroundColor: isDarkMode ? '#333333' : 'blue', 
              },
              headerTintColor: '#fff', 
              headerTitleStyle: {
                fontSize: 20,
                fontWeight: 'bold',
              },
              headerRight: () => (
                <View style={{ flexDirection: 'row', marginRight: 10 }}>
                  <TouchableOpacity onPress={toggleDarkMode} style={styles.modeButton}>
                    <Text style={styles.modeButtonText}>{isDarkMode ? '🌞 Mode' : '🌙 Mode'}</Text>
                  </TouchableOpacity>
                </View>
              ),
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </ImageBackground>
  );
}

function MyTabs() {
  const colorScheme = useColorScheme();

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName;
          if (route.name === 'Beranda') {
            iconName = 'home';
          } else if (route.name === 'Tiket') {
            iconName = 'ticket';
          } else if (route.name === 'Profil') {
            iconName = 'account';
          }
          return <MaterialCommunityIcons name={iconName} color={color} size={size} />;
        },
      })}
      tabBarOptions={{
        style: [styles.tabBar, colorScheme === 'dark' ? styles.tabBarDark : styles.tabBarLight],
        labelStyle: styles.tabLabel,
        activeTintColor: colorScheme === 'dark' ? '#87CEEB' : 'blue',
        inactiveTintColor: colorScheme === 'dark' ? '#aaa' : 'gray', 
      }}
    >
      <Tab.Screen name="Beranda" component={Beranda}
        options={{
          tabBarLabel: 'Beranda',
        }}
      />
      <Tab.Screen name="Tiket" component={Tiket}
        options={{
          tabBarLabel: 'Pesan Tiket',
        }}
      />
      <Tab.Screen name="Profil" component={Profile}
        options={{
          tabBarLabel: 'Profil',
        }}
      />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
  },
  tabBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    borderTopWidth: 1,
    borderTopColor: '#ccc',
  },
  tabBarLight: {
    backgroundColor: '#fff',
  },
  tabBarDark: {
    backgroundColor: '#333333',
  },
  tabLabel: {
    fontSize: 14,
    fontWeight: 'bold',
    textTransform: 'uppercase',
    color: 'purple', 
  },
  modeButton: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 5,
    backgroundColor: '#007BFF',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modeButtonText: {
    color: '#fff',
    fontSize: 12,
    fontWeight: 'bold',
  },
});

export default App;
