import styled from 'styled-components';

interface ProductCardProps {
  off?: boolean;
}

interface ProductPriceProps {
  marginTop: number;
}

export const Container = styled.div`
  padding: 20px;
  position: relative;
  background-color: #fff;
  display: flex;
  flex-direction: column;

  > h1 {
    font-weight: 900;
    font-size: 20px;
    line-height: 28px;
  }
`;

export const Divider = styled.div`
  background-color: #C0C0C0;
  width: 65px;
  height: 4px;
  margin: 6px 0px;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  max-width: 1024px;
  overflow-x: scroll;
`;

export const ProductCard = styled.div<ProductCardProps>`
  width: 216px;
  margin: 0px 20px;
  position: relative;

  .flag {
    position: absolute;
    top: 0;
    right:0;
    width: 80px;
  }

  > div {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    padding-bottom: 15px;
    > button {
      padding: 8px 28px;
      border-radius: 5px;
      background: #000;
      display: flex;
      justify-content: center;
      align-items: center;
      color: #fff;
      font-size: 12px;
      font-weight: 700;
      line-height: 17px;
      margin-top: 16px;
      transition: 280ms ease-in-out;
      opacity: 0;
    }
  }

  > img {
    width:100%;
    height: auto;
  }


  &:hover{
    > div {
      background-color: #E6E8EA;
    > button {
      cursor: pointer;
      opacity: 1;
      }
    }
  }
`;

export const ProductName = styled.span`
  font-weight: 600;
  font-size: 12px;
  text-align: center;
  color: #7a7a7a;
  line-height: 16px;
  margin-top: 7px;
`;

export const ProductListPrice = styled.span`
  font-weight: 400;
  font-size: 12px;
  text-align: center;
  color: #7a7a7a;
  line-height: 16px;
  margin-top: 7px;
  text-decoration: line-through;
`;

export const ProductPrice = styled.span<ProductPriceProps>`
  font-weight: 700;
  font-size: 18px;
  line-height: 25px;
  text-align: center;
  color: #000;
  margin-top: ${props => props.marginTop}px;
`;

export const ProductPriceDetails = styled.span`
  font-weight: 400;
  font-size: 11px;
  line-height: 15px;
  color: #7A7A7A;
`;

export const ProductRate = styled.div`
display: flex;
flex-direction: row;
align-items: center;
margin-top: 7px;

svg {
  color: #F8475F;
  font-size: 11px;
}

> svg + svg {
  margin-left: 3px;
}
`;

export const LoadingContainer = styled.div`
  position: absolute;
  width: 100%;
  top:0px;
  right:0;
  left: 0;
`;
