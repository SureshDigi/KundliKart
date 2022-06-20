import {View, StyleSheet, TextInput} from 'react-native';
import React from 'react';

import {white} from '../../styles/colors';
import {search, Icon} from '../../utils/icons';
import {appStyles} from '../../styles';
import {HORIZONTAL_2, TOP_1} from '../../utils/spacing';

const SearchBar = () => {
  return (
    <View style={[styles.searchBar, appStyles.shadow]}>
      <Icon name={search} />
      <TextInput placeholder="Search kundli by name" />
    </View>
  );
};

const styles = StyleSheet.create({
  searchBar: {
    backgroundColor: white,
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: HORIZONTAL_2 * 2,
    marginTop: TOP_1,
    paddingHorizontal: HORIZONTAL_2,
  },
});

export default SearchBar;
