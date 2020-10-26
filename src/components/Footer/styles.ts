import styled from 'styled-components';

export const Container = styled.div`
background-color: #000;
padding: 24px;
display: flex;
justify-content: center;

> div {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  flex-wrap: wrap;
  color:#fff;
  width: 100%;
  max-width: 1280px;
}

`;

export const AdressWrapper = styled.div`
display: flex;
flex-direction: column;
justify-content: flex-start;
margin: 10px;

  span:nth-of-type(1) {
  font-weight: 700;
  font-size: 20px;
  line-height: 27.28px;
  }
  
  span:nth-of-type(2) {
    font-weight: 400;
    font-size: 13px;
    line-height: 24px;
  }
`;

export const Divider = styled.div`
width: 32px;
height:3px;
background-color: #fff;
margin: 12px 0px;
`;

export const ButtonsWrapper = styled.div`
display: flex;
flex-direction: column;
justify-content: space-around;
align-items: center;
margin: 10px;

button {
  width: 195px;
  height: 38px;
  display: flex;
  flex-direction: row;
  align-items: center;
  background: #fff;
  border-radius: 5px;
  margin: 10px 0px;
  line-height: 12px;
  font-size: 12px;
  font-weight: 600;
  color: #000;
  padding-right: 17px;
  cursor: pointer;
  img {
    width:17px;
    margin: 0px 17px;
  }
}
`;

export const CreditsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  flex-wrap: wrap;
  margin: 10px;

  div {
    display: flex;
    flex-direction: column;

    span {
      font-weight: 400;
      font-size: 10px;
      line-height: 14.46px;
    }

    img {
      height: 18px;
    }
  }


  > div + div {
    margin-left: 25px;
  }
`;
