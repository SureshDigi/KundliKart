import React from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import {black} from '../styles/colors';
import {widthToDp} from '../styles/responsive';

export const backIcon = 'arrow-right';
export const userIcon = 'account';
export const lockIcon = 'lock';
export const search = 'magnify';

export const Icon = ({name}) => {
  return (
    <MaterialCommunityIcons name={name} color={black} size={widthToDp('7%')} />
  );
};
