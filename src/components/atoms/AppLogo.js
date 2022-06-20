import {Image, StyleSheet} from 'react-native';
import React from 'react';

import {APP_LOGO} from '../../utils/images';
import {heightToDp, widthToDp} from '../../styles/responsive';
import {TOP_1} from '../../utils/spacing';

const AppLogo = () => {
  return (
    <Image resizeMode="contain" source={APP_LOGO} style={styles.appLogo} />
  );
};

const styles = StyleSheet.create({
  appLogo: {
    width: widthToDp('20%'),
    height: heightToDp('10%'),
    alignSelf: 'center',
    borderRadius: widthToDp('20%'),
    marginTop: TOP_1,
  },
});

export default AppLogo;
