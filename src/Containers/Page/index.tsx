import React from 'react';
import CorebizCarousel from '../../components/CorebizCarousel';
import Header from '../../components/Header';

import { Container } from './styles';

const Page: React.FC = () => {
  return (
    <Container>
      <Header/>
     <CorebizCarousel/>
    </Container>
  );
};

export default Page;
