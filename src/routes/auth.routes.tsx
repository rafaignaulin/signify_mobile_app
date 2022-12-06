
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import SignUp from '../pages/SignUp';

import Login from '../pages/Login';
import Home from '../pages/Home';

const Auth= createNativeStackNavigator();


const AuthRoutes: React.FC = ( ) => (
  <Auth.Navigator
    screenOptions={{
      headerShown: false
    }}
    initialRouteName="Home"
    >
    <Auth.Screen name="Home" component={Home} />
    <Auth.Screen name="Login" component = { Login } />
    <Auth.Screen name="SignUp" component = { SignUp } />
  </Auth.Navigator>
)

export default AuthRoutes;