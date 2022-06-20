import {Text, StyleSheet, ScrollView} from 'react-native';
import React from 'react';
import {useTranslation} from 'react-i18next';

import {black, emailColor, primary} from '../../styles/colors';
import {
  buttonText,
  FONT_WEIGHT_BOLD,
  heading1,
  heading2,
  subtitle,
} from '../../utils/typography';
import {TOP_1, TOP_3} from '../../utils/spacing';
import AppLogo from '../atoms/AppLogo';
import {widthToDp} from '../../styles/responsive';
import SocialLoginButton from '../atoms/SocialLoginButton';
import {EMAIL, FACEBOOK, GOOGLE} from '../../utils/images';

const AuthScreenSingleTab = ({
  heading,
  terms,
  accountText,
  authBtn,
  authBtnPress,
  onEmailPress,
}) => {
  const {t} = useTranslation();
  return (
    <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
      <Text style={styles.appName}>{t('appName')}</Text>
      <AppLogo />
      <Text style={styles.heading}>{heading}</Text>
      <SocialLoginButton
        imgSrc={FACEBOOK}
        facebook={true}
        name={t('facebook')}
      />
      <SocialLoginButton imgSrc={GOOGLE} google={true} name={t('google')} />
      <SocialLoginButton
        onPress={() => onEmailPress()}
        imgSrc={EMAIL}
        email={true}
        name={t('email')}
      />
      <Text style={styles.text}>
        {`${accountText}`}{' '}
        <Text onPress={() => authBtnPress()} style={styles.signBtn}>
          {authBtn}
        </Text>
      </Text>
      {terms && (
        <Text style={styles.termsText}>
          {t('by-creating-an-account-you-areagreeing-to-our')}
          <Text> {t('terms-of-use')}</Text>
        </Text>
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  appName: {
    color: primary,
    fontSize: heading1,
    fontWeight: FONT_WEIGHT_BOLD,
    textAlign: 'center',
    marginTop: TOP_3,
  },
  heading: {
    fontSize: heading2,
    fontWeight: FONT_WEIGHT_BOLD,
    color: black,
    textAlign: 'center',
    maxWidth: widthToDp('97.5%'),
    marginTop: TOP_1,
  },
  text: {
    textAlign: 'center',
    color: black,
    fontSize: subtitle,
    marginTop: TOP_1,
  },
  signBtn: {
    color: primary,
    fontSize: buttonText,
    fontWeight: FONT_WEIGHT_BOLD,
  },
  termsText: {
    color: emailColor,
    fontSize: subtitle,
    textAlign: 'center',
    alignSelf: 'center',
    maxWidth: widthToDp('80%'),
    marginVertical: TOP_3,
  },
});

export default AuthScreenSingleTab;
