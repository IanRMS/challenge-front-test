import styled from 'styled-components';

interface InputProps {
  error?: boolean;
}

export const Container = styled.div`
  background-color: #F2F2F2;
  padding: 20px 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;

  form {
    display: flex;
    flex-direction: row;
    align-items: center;
    flex-wrap: wrap;
    justify-content: center;

      button {
        width: 140px;
        height: 48px;
        background:#000;
        display: flex;
        align-items: center;
        justify-content: center;
        color: #fff;
        font-weight: 700;
        font-size: 14px;
        line-height: 14px;
        border-radius: 5px;
        margin: 10px;
        cursor: pointer;

        &:disabled {
          cursor: not-allowed;
        }
        @media(max-width: 479px) {
          width: 100%;
        }
      }
  }

  h3 {
    font-weight: 700;
    font-size: 14px;
    line-height: 14px;
    color:#000;
    text-align: center;
  }

  h4 {
    font-weight: 400;
    line-height: 12px;
    font-size: 12px;
    color: #000;
    text-align: center;
  }

  h4 + button {
    margin-top:15px;
    width: 100%;
    max-width:330px;
    min-width: 280px;
    border-radius: 5px;
    background-color: #000;
    font-size: 14px;
    line-height: 14px;
    font-weight: 700;
    text-align: center;
    height: 48px;
    color: #fff;
  }
`;

export const InputContainer = styled.div`
    width: 280px; 
    margin: 10px;
    position: relative;

    @media(max-width: 479px) {
      width: 100%;
    }
`;

export const Title = styled.h2`
  font-weight: 700;
  font-size: 22px;
  line-height: 22px;
  color: #333;
  text-align: center;
  margin-bottom: 5px;
`;

export const Input = styled.input<InputProps>`
  width: 100%;
  height:48px;
  border-radius: 5px;
  background-color: #fff !important;
  border: ${props => props.error ? '2px solid #D7182A' : 'none'};
  padding: 16px;
  font-weight: 700;
  font-size: 12px;
  line-height: 14px;
  color: #585858;
  transition: 280ms ease-in-out;

  &:focus {
    outline: none;
    border: ${props => props.error ? '2px solid #D7182A' : 'none'};
  }

  &::-internal-autofill-selected {
    background-color: #fff;
  }
`;

export const ErrorMessage = styled.span`
  position: absolute;
  color:#D7182A;
  font-weight: 400;
  font-size: 12px;
  line-height: 12px;
  bottom: -16px;
  left:0px;
`;

export const LoadingContainer = styled.div`
  position: absolute;
  width: 100%;
  top:0px;
  right:0;
  left: 0;
`;
