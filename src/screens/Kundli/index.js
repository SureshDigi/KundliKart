import React from 'react';

import TabView from '../../layouts/TabViewLayout';
import {If} from '../../helpers/If';
import OpenKundli from '../../components/organisms/OpenKundli';
import NewKundli from '../../components/organisms/NewKundli';

const Kundli = () => {
  const [routes] = React.useState([
    {key: 'first', title: 'Open Kundli'},
    {key: 'second', title: 'New Kundli'},
  ]);
  const [index, setIndex] = React.useState(0);
  return (
    <TabView index={index} setIndex={setIndex} routes={routes}>
      <If show={index === 0}>
        <OpenKundli />
      </If>
      <If show={index === 1}>
        <NewKundli />
      </If>
    </TabView>
  );
};

export default Kundli;
