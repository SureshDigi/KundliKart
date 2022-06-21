import React from 'react';

import {createDrawerNavigator} from '@react-navigation/drawer';
import Home from '../../screens/Home';
import Kundli from '../../screens/Kundli';
import Matching from '../../screens/Matching';
import {primary} from '../../styles/colors';
import Horoscope from '../../screens/HoroScope';

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator screenOptions={{headerStyle: {backgroundColor: primary}}}>
      <Drawer.Screen name="Home" component={Home} />
      <Drawer.Screen name="Kundli" component={Kundli} />
      <Drawer.Screen name="Matching" component={Matching} />
      <Drawer.Screen name="Horoscope" component={Horoscope} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
