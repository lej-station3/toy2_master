import styled from 'styled-components';
import { lighten } from 'polished';


export const Card = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 300px;
  margin-bottom: 7px;
  font-size: 16px;
  color: #fff;
  background-color: #8C2703;
  &:hover{
    background-color: ${lighten('0.1', '#8C2703')} ;
  }
  h5{
    margin-left:30px;
    color: #fff;
  }
  .icon{
    margin-left:10px;
    opacity:0;
    &:hover{
    opacity:1;
    }
  }
`;

export const Select = styled.div`
 
  width: 100%;
  background: none;
  opacity: 0.9;
  color: none;
  padding: 5px;
  font-size: 16px;
  border: none;
  border: 1px solid #000;
  box-shadow: none;
  outline: none; 
  select{
    background: none;
    border:none;
    box-shadow: none;
    outline: none;
    text-decoration:none;
    //초기화라는데 왜안댐
    /* -webkit-border-radius: 0;
    -moz-border-radius: 0;
    -o-border-radius: 0; */
  }
    option{
      border: none;
      color: black;
      display:flex;
      white-space: pre;
      padding: 2px;
    }
   
`;