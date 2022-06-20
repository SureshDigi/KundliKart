import {StyleSheet, Text} from 'react-native';
import React from 'react';

import {TabView, SceneMap, TabBar} from 'react-native-tab-view';
import {black, primary} from '../styles/colors';

import {heightToDp, widthToDp} from '../styles/responsive';
import Container from './Container';
import {heading2} from '../utils/typography';

const TabViewLayout = ({children, routes, index, setIndex}) => {
  const FirstRoute = () => <Container>{children}</Container>;

  const SecondRoute = () => <Container>{children}</Container>;

  const renderScene = SceneMap({
    first: FirstRoute,
    second: SecondRoute,
  });
  const renderTabBar = props => (
    <TabBar
      {...props}
      indicatorStyle={styles.tabBarIndicator}
      style={styles.tabBar}
      renderLabel={({route, focused, color}) => (
        <Text
          style={{
            color: black,
            fontSize: heading2,
          }}>
          {route.title}
        </Text>
      )}
    />
  );

  return (
    <TabView
      renderTabBar={renderTabBar}
      navigationState={{index, routes}}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={{width: widthToDp('100%')}}
    />
  );
};

const styles = StyleSheet.create({
  tabBar: {
    backgroundColor: primary,
    height: heightToDp('6.5%'),
    justifyContent: 'center',
  },
  tabBarIndicator: {
    backgroundColor: black,
  },
});

export default TabViewLayout;
