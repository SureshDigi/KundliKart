import {View} from 'react-native';
import React from 'react';

import {appStyles} from '../styles';

const Container = ({children}) => {
  return <View style={appStyles.container}>{children}</View>;
};

export default Container;
