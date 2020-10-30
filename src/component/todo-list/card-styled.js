import styled from 'styled-components';
import { lighten } from 'polished';

export const Card = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position:relative;
  margin-bottom: 7px;
  color: #fff;
  font-size: 16px;
  background-color: #8C2703;
  &:hover{
    background-color: ${lighten('0.1', '#8C2703')} ;
  }
  h5{
    text-align:center;
    overflow:hidden;
    text-overflow:ellipsis;
    white-space:nowrap;
    color: #fff;
  }
  .icon{
    position:absolute;
    right:10px;
  }
  /* .icon{
    opacity:0; 
    &:hover{
    opacity:1;
    }
  } */
`;

export const Select = styled.div`
  width: 100%;
  padding: 5px;
  border: none;
  border: 1px solid #000;
  background: none;
  opacity: 0.9;
  color: none;
  font-size: 16px;
  box-shadow: none;
  outline: none; 
  select{
    background: none;
    border:none;
    box-shadow: none;
    outline: none;
    text-decoration:none;
    
  }
    option{
      border: none;
      color: black;
      display:flex;
      white-space: pre;
      padding: 2px;
    }
`;