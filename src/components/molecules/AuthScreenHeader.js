import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import {useTranslation} from 'react-i18next';
import {useNavigation} from '@react-navigation/native';

import {backIcon, Icon} from '../../utils/icons';
import {FONT_WEIGHT_BOLD, heading1, heading2} from '../../utils/typography';
import {widthToDp} from '../../styles/responsive';
import {black, primary} from '../../styles/colors';
import {TOP_1} from '../../utils/spacing';

const AuthScreenHeader = () => {
  const navigation = useNavigation();
  const {t} = useTranslation();
  return (
    <View style={styles.header}>
      <View style={styles.skipButton}>
        <Text
          onPress={() => navigation.navigate('DrawerNavigator')}
          style={styles.skipText}>
          {t('skip')}
        </Text>
        <Icon name={backIcon} />
      </View>
      <View style={styles.appTitle}>
        <Text style={styles.heading}>{`${t('appName')} ${t('cloud')}`}</Text>
        <Text style={styles.subHeading}>{`${t('save-kundli-on-cloud')}, ${t(
          'access-from-any-device',
        )}`}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flex: 1,
    backgroundColor: primary,
  },
  skipText: {
    color: black,
    textTransform: 'uppercase',
    fontSize: heading2,
    textAlign: 'right',
    fontWeight: FONT_WEIGHT_BOLD,
  },
  skipButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
    margin: widthToDp('5%'),
  },
  heading: {
    fontSize: heading1,
    fontWeight: FONT_WEIGHT_BOLD,
    color: black,
    textAlign: 'center',
    justifyContent: 'center',
  },
  subHeading: {
    fontSize: heading2,
    color: black,
    textAlign: 'center',
    maxWidth: widthToDp('98%'),
    marginTop: TOP_1,
  },
});

export default AuthScreenHeader;
