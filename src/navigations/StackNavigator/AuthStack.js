import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import ChangeLanguage from '../../screens/ChangeLanguage';
import Authentication from '../../screens/Authentication';
import DrawerNavigator from '../DrawerNavigator';

const Stack = createStackNavigator();

const AuthStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="ChangeLanguage" component={ChangeLanguage} />
      <Stack.Screen name="Authentication" component={Authentication} />
      <Stack.Screen name="DrawerNavigator" component={DrawerNavigator} />
    </Stack.Navigator>
  );
};

export default AuthStack;
