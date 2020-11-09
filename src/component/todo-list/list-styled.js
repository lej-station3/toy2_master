import styled from 'styled-components';

export const  List = styled.div`
  width: 300px;
  margin-right: 30px;
  border-radius: 10px;
  background-color: #F2F2EB;  

  h2{
    display: flex;
    align-items: center;
    justify-content: center;
    height: 50px;
    color: #000;
    font-size: 25px;
    font-style: italic;
    font-weight: bold;
 
}
`;

export const ListTitle = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-top:10px;
  margin-left: 22px;
  .icon{
    margin-left: 10px;
    cursor: pointer;
    width: 15px;
    opacity:0.5;
    &:hover{
   opacity:0.9;
 }
  }
`;

