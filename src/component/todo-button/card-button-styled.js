import styled from 'styled-components';
import { lighten }from 'polished';

export const CardButton = styled.div`
  p{
    display: inline-block;
    margin: 20px;
    color: #F2994B;
    font-size: 15px;
    font-weight: bold;
    font-style: italic;
    line-height:15px;
    cursor: pointer;
  }
`;

export const InputSet = styled.div`

textarea{
  /* textarea에 있는 문제를 해결해줌 */
  width:265px;
  resize:none;
  padding:20px;
  margin-left: 18px;
  margin-top: 10px;
  color: #000;
  background-color: ${lighten (0.1, '#F2994B')};
  border-radius: 10px;
  opacity:0.7;
  font-size: 15px;
  text-align:left;
}
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 3px;
  button{
    cursor: pointer;
    margin-bottom: 5px;
    margin-right: 14px;
    padding: 10px;
    color: #F2994B;
    font-size: 16px;
    font-weight: bold;
}
`;
