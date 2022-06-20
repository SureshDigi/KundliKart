import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import {appStyles} from '../../styles';

const CloudKundlis = () => {
  return (
    <View style={[appStyles.container, styles.notLoggedIn]}>
      <Text>You are not logged in</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  notLoggedIn: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default CloudKundlis;
