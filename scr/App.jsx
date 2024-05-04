import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import Beranda from './screens/beranda';
import Profile from './screens/profile';
import Tiket from './screens/tiket';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
      tabBarOptions={{
        style: styles.tabBar,
        labelStyle: styles.tabLabel,
      }}
    >
      <Tab.Screen name="Beranda" component={Beranda}
        options={{
          tabBarLabel: 'Beranda',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen name="Tiket" component={Tiket}
        options={{
          tabBarLabel: 'Pesan Tiket',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="ticket" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen name="Profil" component={Profile}
        options={{
          tabBarLabel: 'Profil',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="account" color={color} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="CINEMA ID" component={MyTabs} />
      </Stack.Navigator>
      {/* Chat Button */}
      <TouchableOpacity style={styles.chatButton}>
        <MaterialCommunityIcons name="chat" color="white" size={26} />
      </TouchableOpacity>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  tabBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    borderTopWidth: 1,
    borderTopColor: '#ccc',
  },
  tabLabel: {
    fontSize: 14,
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
  chatButton: {
    position: 'absolute',
    bottom: 70, // Penyesuaian posisi tombol chat
    right: 20,
    backgroundColor: 'blue',
    width: 50,
    height: 50,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 5,
  },
});

export default App;
