import React from 'react';
import {NavigationContainer} from '@react-navigation/native';

import AuthStack from './StackNavigator/AuthStack';

const AppNavigation = () => {
  return (
    <NavigationContainer>
      <AuthStack />
    </NavigationContainer>
  );
};

export default AppNavigation;
