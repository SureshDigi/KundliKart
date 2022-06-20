import React, {useState} from 'react';

import Container from '../../layouts/Container';
import CustomSwitchTab from '../atoms/CustomSwitchTab';
import SearchBar from '../atoms/SearchBar';
import {If} from '../../helpers/If';
import LocalKundlis from './LocalKundlis';
import CloudKundlis from './CloudKundlis';

const OpenKundli = () => {
  const [activeTab, setActiveTab] = useState(0);
  return (
    <Container>
      <SearchBar />
      <CustomSwitchTab
        activeTab={activeTab}
        onPress={value => setActiveTab(value)}
        switch1={'All Local Kundlis'}
        switch2={'Cloud Kundlis'}
      />
      <If show={activeTab === 0}>
        <LocalKundlis />
      </If>
      <If show={activeTab === 1}>
        <CloudKundlis />
      </If>
    </Container>
  );
};

export default OpenKundli;
