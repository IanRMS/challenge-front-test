import React from 'react';
import Header from '../../components/Header';

import { Container } from './styles';

const Page: React.FC = () => {
  return (
    <Container>
      <Header/>
      <h1>Page</h1>
    </Container>
  );
};

export default Page;
