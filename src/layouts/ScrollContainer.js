import {ScrollView} from 'react-native';
import React from 'react';
import {appStyles} from '../styles';

const ScrollContainer = ({children}) => {
  return (
    <ScrollView contentContainerStyle={[appStyles.scrollContainer]}>
      {children}
    </ScrollView>
  );
};

export default ScrollContainer;
