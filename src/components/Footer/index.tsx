import React from 'react';

import { 
  AdressWrapper, 
  ButtonsWrapper, 
  Container, 
  CreditsWrapper, 
  Divider 
} from './styles';
import EmailIcon from '../../assets/email-icon.svg';
import TelIcon from '../../assets/tel-icon.svg';
import CorebizLogo from '../../assets/corebiz-logo-white.svg';
import VtexIcon from '../../assets/vtex-icon.svg';

const Footer: React.FC = () => {
  return (
    <Container>
      <div>
        <AdressWrapper>
          <span>Localização</span>
          <Divider/>
          <span>
            Avenida Andrômeda, 2000. Bloco 6 e 8 <br/>
            Alphaville SP <br/>
            brasil@corebiz.ag <br/>
            +55 11 3090 1039</span>
        </AdressWrapper>
        <ButtonsWrapper>
          <button>
            <img src={EmailIcon} alt=""/>
            ENTRE EM CONTATO
          </button>
          <button>
            <img src={TelIcon} alt=""/>
            FALE COM O NOSSO CONSULTOR ONLINE
          </button>
        </ButtonsWrapper>
        <CreditsWrapper>
          <div>
            <span>Created by</span>
            <img src={CorebizLogo} alt=""/> 
          </div>

          <div>
            <span>Powered by</span>
            <img src={VtexIcon} alt=""/> 
          </div>
        </CreditsWrapper>
      </div>
    </Container>
  );
};

export default Footer;
