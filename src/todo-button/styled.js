import styled from 'styled-components';

export const Button = styled.div`

  p{ 
    display: flex;
    justify-content: flex-end;
    margin-right:20px;
    font-size:  14px;
    font-weight: 600;
    font-style: italic;
    color: #fff;
    opacity: 0.6;
  }
`;

export const InputSet = styled.div`
display: flex;

align-items: center;
justify-content: center;
padding:10px;
textarea{
  margin:10px 13px;
  height:20px;
  width:200px;
  padding:0;
  border: none;
  box-shadow: none;
  background: none;
  text-decoration: none;
  outline: none;
  -webkit-appearance: none;
  color:#000;
}
textarea::placeholder {
  color:#fff;
}
button:focus,
button:active,
textarea:focus,
textarea:active {
  outline: none;
  box-shadow: none;
}

button{

  font-size:16px;
  border: none;
  box-shadow: none;
  background: none;
  text-decoration: none;
  outline: none;
  -webkit-appearance: none;
}
  `;


export const ButtonWrapper = styled.div`
  display:flex;
  flex-direction:column;
`