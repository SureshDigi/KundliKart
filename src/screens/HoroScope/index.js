import React from 'react';

import Container from '../../layouts/Container';
import OptionsList from '../../components/organisms/HomeOptionsList';
import {ZodiacSignsData} from '../../constants/ZodiacSignsData';

const Horoscope = () => {
  return (
    <Container>
      <OptionsList data={ZodiacSignsData} />
    </Container>
  );
};

export default Horoscope;
