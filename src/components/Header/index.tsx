import React from 'react';

import { Badge, Container, DrawerButton, InputWrapper, Logo, SearchInput, ShoppingWrapper, UserWrapper } from './styles';
import CorebizLogo from '../../assets/logo-corebiz.svg';
import MenuIcon from '../../assets/menu-icon.svg';
import ShoppingcarIcon from '../../assets/shoppingcar-icon.svg';
import SearchIcon from '../../assets/search-icon.svg';
import UserIcon from '../../assets/user-icon.svg';

const Header: React.FC = () => {
  return (
    <Container>
        <DrawerButton>
          <img alt="menu" src={MenuIcon}/>
        </DrawerButton>
        <Logo alt="" src={CorebizLogo}/>
      <InputWrapper>
        <img alt="" src={SearchIcon}/>
        <SearchInput placeholder="O que está procurando?"/>
      </InputWrapper>
        <UserWrapper>
          <img src={UserIcon} alt=""/>
          <span>Minha Conta</span>
        </UserWrapper>
        <ShoppingWrapper>
          <img src={ShoppingcarIcon} alt=""/>
          <Badge>
            <span>2</span>
          </Badge>
        </ShoppingWrapper>
    </Container>
  );
};

export default Header;
