import styled from 'styled-components';
import Background from '../../assets/carousel-background.jpg';

export const Container = styled.div`
  background-image: url(${Background});
  width:100vw;
  height: calc(100vw / 2);
  min-height:190px;
  max-height: 430px;
  background-position-x: center;
  background-size: cover;
  position: relative;

  @media(max-width: 1023px){
          background-position-x: right;
  }

  span {
    color:#fff;
    z-index:1;
  }

  &::after{
    content: "";
    position: absolute;
    width:100%;
    height:100%;
    top:0;
    bottom:0;
    left:0;
    right:0;
    background:transparent;
    pointer-events: none;

    @media(max-width: 1023px){
      background: rgba(0,0,0,0.55);
    } 
  }

  span:nth-of-type(1) {
    font-weight: 700;
    font-size: 30px;
    line-height: 40.92px;

    @media(max-width:479px){
      line-height: 30px;
      font-size: 20px;
    } 
  }

    span:nth-of-type(2) {
    font-weight: 900;
    font-size: 45px;
    line-height: 45px;

    @media(max-width:479px){
      font-size:30px;
      line-height: 28px;
    }
  }
`;

export const SpanWrapper = styled.div`
width:100%;
height: 100%;
min-width: 320px;
display: flex;
flex-direction: column;
align-items: flex-start;
justify-content: center;
padding-left: 20px;
@media(min-width:1024px){
  width:50%;
  align-items: center;
  padding: 0px;
}
`;