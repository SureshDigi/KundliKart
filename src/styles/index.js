import {StyleSheet} from 'react-native';

import {surface} from './colors';
import {widthToDp} from './responsive';

export const appStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: surface,
  },
  scrollContainer: {
    width: widthToDp('100%'),
    height: 'auto',
  },
  shadow: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
});
