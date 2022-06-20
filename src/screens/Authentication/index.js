import React from 'react';

import AuthScreenHeader from '../../components/molecules/AuthScreenHeader';
import AuthScreenTabs from '../../components/organisms/AuthScreenTabs';
import Container from '../../layouts/Container';

const Authentication = () => {
  return (
    <Container>
      <AuthScreenHeader />
      <AuthScreenTabs />
    </Container>
  );
};

export default Authentication;
