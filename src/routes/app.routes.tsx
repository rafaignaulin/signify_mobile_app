import React from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../pages/Home';
import Login from '../pages/Login';
import Dashboard from '../pages/Dashboard';
import MusicDetails from '../pages/MusicDetails';
import AddMusic from '../pages/AddMusic';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const Router = () => {
  const BottomTabNavigator = () => {
    return (
      <Tab.Navigator>
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Login" component={Login} />
      </Tab.Navigator>
    );
  };
  return (
      <Stack.Navigator screenOptions={{headerShown: false}} initialRouteName="Dashboard">
        {/* <Stack.Screen
          component={BottomTabNavigator}
          name="BottomTabNavigator"
          options={{ headerShown: false }}
        /> */}
        <Stack.Screen component={Home} name="Home" />
        <Stack.Screen component={Dashboard} name="Dashboard" />
        <Stack.Screen component={MusicDetails} name="MusicDetails" />
        <Stack.Screen component={AddMusic} name="AddMusic" />
      </Stack.Navigator>
  );
};

export default Router;
