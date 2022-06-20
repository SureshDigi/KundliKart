import {View, Text, StyleSheet, TouchableHighlight} from 'react-native';
import React from 'react';

import {HORIZONTAL_2, TOP_1, TOP_3} from '../../utils/spacing';
import {primary, white} from '../../styles/colors';

const CustomSwitchTab = ({onPress, activeTab, switch1, switch2}) => {
  return (
    <View style={styles.tab}>
      <TouchableHighlight
        underlayColor={'transparent'}
        onPress={() => onPress(0)}
        disabled={activeTab === 0 ? true : false}
        style={[
          styles.tabOption,
          {backgroundColor: activeTab === 0 ? primary : white},
        ]}>
        <Text>{switch1}</Text>
      </TouchableHighlight>
      <TouchableHighlight
        disabled={activeTab === 1 ? true : false}
        underlayColor={'transparent'}
        onPress={() => onPress(1)}
        style={[
          styles.tabOption,
          {backgroundColor: activeTab === 1 ? primary : white},
        ]}>
        <Text>{switch2}</Text>
      </TouchableHighlight>
    </View>
  );
};

const styles = StyleSheet.create({
  tab: {
    marginHorizontal: HORIZONTAL_2 * 2,
    marginTop: TOP_3,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    borderWidth: 1,
    borderColor: primary,
  },
  tabOption: {
    flex: 1,
    backgroundColor: primary,
    paddingVertical: TOP_1 * 1.5,
    alignItems: 'center',
  },
});

export default CustomSwitchTab;
