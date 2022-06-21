import React from 'react';

import OptionsList from '../../components/organisms/HomeOptionsList';
import Container from '../../layouts/Container';
import {HomeScreenOptionsData} from '../../constants/HomeScreenOptionsData';

const Home = () => {
  return (
    <Container>
      <OptionsList data={HomeScreenOptionsData} />
    </Container>
  );
};

export default Home;
