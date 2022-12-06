import React from 'react';

import AuthRoutes from './auth.routes';
import AppRoutes from './app.routes';

import  { useAuth } from '../hooks/auth';

import { NavigationContainer } from '@react-navigation/native';

const Routes: React.FC = () => {
  const { user } = useAuth();

  return (
    <NavigationContainer>
      {user ? <AppRoutes /> : <AuthRoutes />}
    </NavigationContainer>
    );

};

export default Routes;