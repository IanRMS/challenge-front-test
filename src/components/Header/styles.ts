import styled from 'styled-components';

export const Container = styled.div`
width: 100vw;
height: 80px;
display: flex;
flex-direction: column;
align-items: center;
justify-content: space-around;
background-color: #fff;
position: fixed;
top: 0;
right: 0;
left: 0;
padding: 0px 15px;

@media(min-width:769px){
  flex-direction: row;
  justify-content: center;
}
`;

export const Logo = styled.img`
height: 25px;

@media(min-width:1024px){
  margin-right: 20px;
  height: 41px;
}
`;

export const DrawerButton = styled.button`
height: 15px;
display: block;
position: absolute;
left:15px;
top: 15px;

@media(min-width: 769px) {
  display: none
}
`;

export const ShoppingWrapper = styled.div`
display: flex;
flex-direction: row;
align-items: center;
justify-content: center;
position: absolute;
right: 15px;
top: 15px;

@media(min-width:768px){
  position: relative;
  top: 0px;
  margin-left: 16px;
}
`;

export const ShoppingcarButton = styled.button`
`;
export const ShoppingcarIcon = styled.img`
height: 18px;
`;

export const Badge = styled.div`
margin-left: 4px;
border-radius: 50%;
width: 14px;
height: 14px;
display: flex;
align-items: center;
justify-content: center;
background-color: #F8475F;

> span {
  font-size: 10px;
  font-weight: 600;
  color: #fff;
}
`;

export const InputWrapper = styled.div`
  width: 100%;
  max-width: 718px;
  height: 24px;
  position: relative;

  img {
    position: absolute;
    right: 0px;
    bottom: 5px;
    width: 18px;
    height: 18px;
  }

  @media(min-width:768px){
    margin: 0px 16px;
  }
`;

export const SearchInput = styled.input`
width: 100%;
font-size: 13px;
outline: none;
border: none;
border-bottom: 1px solid #7A7A7A;
padding-bottom: 3px;
`;

export const UserWrapper = styled.div`
display: flex;
flex-direction: row;
align-items: center;
margin-right: 16px;
> img {
  width: 18px;
  height: 18px;
}
> span {
  font-size: 13px;
  color: #7A7A7A;
  font-weight: 400;
  margin-left: 5px;
}

@media(max-width: 768px){
  display: none;
}
@media(min-width: 1024px){
  margin:0px 16px;
}
`;
