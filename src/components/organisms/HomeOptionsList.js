import {FlatList} from 'react-native';
import React from 'react';

import SingleHomeOption from '../molecules/SingleHomeOption';

const renderSingleHomeOption = ({item}) => {
  return <SingleHomeOption item={item} />;
};

const OptionsList = ({data}) => {
  return (
    <FlatList
      data={data}
      keyExtractor={item => item.id.toString()}
      renderItem={renderSingleHomeOption}
      numColumns={3}
    />
  );
};

export default OptionsList;
