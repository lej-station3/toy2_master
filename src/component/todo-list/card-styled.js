import styled from 'styled-components';
import { darken } from 'polished';

export const Card = styled.div`
  display: flex;
  justify-content:space-around;
  align-items:center;
  width: 265px;
  border-radius: 10px;
  margin: 0 auto;
  margin-top: 10px;
  background-color: ${darken(0.1, '#38A67E')};
  opacity:0.8;
  color: #fff;
  font-size: 16px;
 
  p{
    /* 넘치지 않도록 영역을 세워주고 word-break를 통해서 글자가 내려앉도록 한다 */
    padding: 30px;
    text-align:center;
    cursor: pointer;
    word-break:break-all;
    color: #fff;
    &:active{
      padding: 30px;
      font-weight: 600;
    }
  }
`;

export const Icon = styled.div`
   width:15px;
   cursor: pointer;
   .delIcon{
    opacity:0.5;
    &:hover{
     opacity:0.9;
   }
  } 
   .editIcon{
    opacity:0.5;
    &:hover{
     opacity:0.9;
   }
  }
  
`;