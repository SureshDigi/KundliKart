import 'react-native-gesture-handler';
import React from 'react';
import {StatusBar} from 'react-native';

import AppNavigation from './src/navigations';
import {primary} from './src/styles/colors';

const App = () => {
  return (
    <>
      <StatusBar
        barStyle="light-content"
        hidden={false}
        backgroundColor={primary}
      />
      <AppNavigation />
    </>
  );
};

export default App;
