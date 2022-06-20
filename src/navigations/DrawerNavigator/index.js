import React from 'react';

import {createDrawerNavigator} from '@react-navigation/drawer';
import Home from '../../screens/Home';
import Kundli from '../../screens/Kundli';
import {primary} from '../../styles/colors';

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator screenOptions={{headerStyle: {backgroundColor: primary}}}>
      <Drawer.Screen name="Home" component={Home} />
      <Drawer.Screen name="Kundli" component={Kundli} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
