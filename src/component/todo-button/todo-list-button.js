import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { insertList } from '../../modules/list.js';

const Title = styled.div`
button{
    padding:10px;
    border: none;
    border-radius:3px;
    text-decoration: none;
    font-size:20px;
    color:#55967e;
    box-shadow: none;
    outline: none;
    border: 1px solid #55967e;
    opacity:0.6;
}

`;
const Input = styled.div`
  border: none;
  outline: none;
  box-shadow: none;
  color:#263959;
  input{
    background: none;
    border:none;
    box-shadow: none;
    outline: none;
    text-decoration:none;
    border-bottom:2px solid #55967e;
  }
  button{
  margin-top:5px;
  margin-left:5px;
  font-size:15px;
  font-weight:600;
  color: #55967e;
  background:none;
  border:none;
}
`;

function TitleInput({ setOpen }){
  const [listTitle, setListTitle] = useState('');
  const dispatch = useDispatch();

  const changeTitle = e => {
    setListTitle(e.currentTarget.value);
  };
  const handleEnter = e => {
    e.preventDefault();
    handleInsetList(listTitle);
    setOpen(false);
  };

  const handleInsetList = listTitle => {
    if(listTitle) {
      dispatch(insertList(listTitle));
      setListTitle(''); 
      console.log('리스트타이틇', listTitle);
    }
  };
  return(
    <Input>
      <input  onChange={changeTitle} value={listTitle} />
    
      <button  onClick={handleEnter}> Add </button>
      <button  onClick={() => setOpen(false)}> X </button>
 
    </Input>
  );
}

function TodoListButton( ) {
  const [open, setOpen] = useState(false);

  return(
    <Title>
      { open ? (
        <TitleInput setOpen={setOpen} / >
      ): (<button onClick={() => setOpen(!open)}> 
        Add a List </button>
      )}
    </Title>
  );

}
export default TodoListButton;
