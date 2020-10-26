import {createGlobalStyle} from 'styled-components';

export const GlobalStyle = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
*, input, button {
font-family: 'Nunito', sans-serif;
}

button {
  border: none;
  background: transparent;
  outline: none;
}
`;