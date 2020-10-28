import React from 'react';

import { Container, Dot, DotWrapper, SpanWrapper } from './styles';

const CorebizCarousel: React.FC = () => {
  return (
    <Container>
      <SpanWrapper>
        <span>Olá, o que você está buscando?</span>
        <span>Criar ou migrar seu <br/> e-commerce?</span>
      </SpanWrapper>
      <DotWrapper>
        <Dot active/>
        <Dot />
        <Dot />
        <Dot />
      </DotWrapper>
    </Container>
  );
};

export default CorebizCarousel;
