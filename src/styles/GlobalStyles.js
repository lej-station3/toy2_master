import { createGlobalStyle }  from 'styled-components';
import reset from 'styled-reset';

export const GlobalStyle = createGlobalStyle`
${reset}
  *{
    box-sizing:border-box;
    padding:0;
    margin:0;
  }
 
  input,button,textarea{
  background:none;
  border: none;
  box-shadow: none;
  outline: none;
  color:#55967e;
  text-decoration:none;
  cursor: pointer;
  }
  
  button:active,
  input:active {
  outline: none;
  box-shadow: none;
}
`;
