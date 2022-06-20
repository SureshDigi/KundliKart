import {FlatList} from 'react-native';
import React from 'react';

import {HomeScreenOptionsData} from '../../constants/HomeScreenOptionsData';
import SingleHomeOption from '../molecules/SingleHomeOption';

const renderSingleHomeOption = ({item}) => {
  return <SingleHomeOption item={item} />;
};

const HomeOptionsList = () => {
  return (
    <FlatList
      data={HomeScreenOptionsData}
      keyExtractor={item => item.id.toString()}
      renderItem={renderSingleHomeOption}
      numColumns={3}
    />
  );
};

export default HomeOptionsList;
