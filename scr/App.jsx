import React from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import Register from './screens/register'; // Asumsikan Register ada di folder screens
import Beranda from './screens/beranda';
import Profile from './screens/profile';
import Tiket from './screens/tiket';
import admin from './screens/admin';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
      tabBarOptions={{
        style: styles.tabBar,
        labelStyle: styles.tabLabel,
        activeTintColor: 'blue',
        inactiveTintColor: 'gray', 
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
              backgroundColor: 'blue', 
            },
            headerTintColor: '#fff', 
            headerTitleStyle: {
              fontSize: 20,
              fontWeight: 'bold',
            },
          }}
        />
        <Stack.Screen
          name="chatAdmin"
          component={admin}
          options={{
            headerTitleAlign: 'center',
            headerStyle: {
              backgroundColor: 'blue', 
            },
            headerTintColor: '#fff', 
            headerTitleStyle: {
              fontSize: 20,
              fontWeight: 'bold',
            },
          }}
        />
      </Stack.Navigator>
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
    color: 'purple', 
  },
});

export default App;
