import styled from 'styled-components';
import { darken } from 'polished';

export const CardButton = styled.div`
  p{
    display: inline-block;
    margin-left: 20px;
    color: #fff;
    font-size: 20px;
    font-weight: bold;
    font-style: italic;
  }
`;

export const InputSet = styled.div`
input{
  width: 100%;
  height: 73.44px;
  padding: 0;
  color: #fff;
  text-decoration: none;
  font-size: 20px;
  text-align: center;
  border: none;
  outline: none;
  box-shadow: none;
  background: ${darken('0.1', '#BF8563')};
  button:focus,
  button:active,
  input:focus,
  input:active {
  outline: none;
  box-shadow: none;
}
}
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 3px;
  button{
    margin-bottom: 5px;
    margin-right: 5px;
    padding: 10px;
    color: #000;
    font-size: 16px;
    font-weight: 800;
    text-decoration: none;
    border: none;
    box-shadow: none;
    outline: none;
    background: none;
      &:active{
        margin-right: 4px;
        border-radius: 5px;
        color: #fff;
        background: #8C2703;
  }
}
`;
