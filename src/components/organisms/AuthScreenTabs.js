import {View, StyleSheet} from 'react-native';
import React, {useState} from 'react';
import {TabView, SceneMap, TabBar} from 'react-native-tab-view';
import {useTranslation} from 'react-i18next';

import {black, primary} from '../../styles/colors';
import {heightToDp, widthToDp} from '../../styles/responsive';
import {buttonText, FONT_WEIGHT_BOLD} from '../../utils/typography';
import AuthScreenSingleTab from './AuthScreenSingleTab';
import EmailAuth from './EmailAuth';

const AuthScreenTabs = () => {
  const {t} = useTranslation();
  const [index, setIndex] = useState(0);
  const [email, setEmail] = useState(false);
  const [routes] = useState([
    {key: 'first', title: 'SIGN UP'},
    {key: 'second', title: 'SIGN IN'},
  ]);
  const FirstRoute = () =>
    !email ? (
      <AuthScreenSingleTab
        heading={t('charts-and-notes-on-cloud-multi-device-access')}
        terms={true}
        accountText={t('already-have-an-account')}
        authBtn={t('signin')}
        authBtnPress={() => setIndex(1)}
        onEmailPress={() => setEmail(true)}
      />
    ) : (
      <EmailAuth />
    );

  const SecondRoute = () =>
    !email ? (
      <AuthScreenSingleTab
        heading={t('welcome-back')}
        terms={false}
        accountText={t('dont-have-an-account')}
        authBtn={t('signup')}
        authBtnPress={() => setIndex(0)}
        onEmailPress={() => console.log('email button pressed')}
      />
    ) : (
      <EmailAuth />
    );
  const renderScene = SceneMap({
    first: FirstRoute,
    second: SecondRoute,
  });
  const renderTabBar = props => (
    <TabBar
      {...props}
      indicatorStyle={styles.tabBarIndicator}
      style={styles.tabBAr}
      labelStyle={styles.tabBarLabelText}
    />
  );
  return (
    <View style={styles.tabSection}>
      <TabView
        renderTabBar={renderTabBar}
        navigationState={{index, routes}}
        renderScene={renderScene}
        onIndexChange={setIndex}
        initialLayout={{width: widthToDp('100%')}}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  tabSection: {
    flex: 3,
  },
  tabBAr: {
    backgroundColor: primary,
  },
  tabBarLabelText: {
    color: black,
    fontWeight: FONT_WEIGHT_BOLD,
    fontSize: buttonText,
  },
  tabBarIndicator: {
    backgroundColor: black,
    borderWidth: heightToDp('0.2%'),
  },
});

export default AuthScreenTabs;
