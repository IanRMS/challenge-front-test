import React from 'react';
import CorebizCarousel from '../../components/CorebizCarousel';
import Footer from '../../components/Footer';
import Header from '../../components/Header';

import { Container } from './styles';

const Page: React.FC = () => {
  return (
    <Container>
      <Header/>
     <CorebizCarousel/>
     <Footer/>
    </Container>
  );
};

export default Page;
