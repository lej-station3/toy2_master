import styled from 'styled-components';


export const CardButton = styled.div`
  p{
    display: inline-block;
    margin-left: 20px;
    color: #fff;
    font-size: 15px;
    font-weight: bold;
    font-style: italic;
  }
`;

export const InputSet = styled.div`
textarea{
  /* textarea에 있는 문제를 해결해줌 */
  resize:none;
  width: 100%;
  padding: 0;
  padding-top:10px;
  padding-left:10px;
  color: #fff;
  text-decoration: none;
  font-size: 15px;
  text-align:left;
  border: none;
  outline: none;
  box-shadow: none;
  border-bottom: 1px solid #fff;
  background:none;
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
    color: #fff;
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
        color: #263959;
        background: #fff;
  }
}
`;
