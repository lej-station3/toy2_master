import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { insertList } from '../../modules/list.js';

const Title = styled.div`
button{
    padding:5px;
    border: none;
    border-radius:3px;
    text-decoration: none;
    font-size:20px;
    color:#fff;
    box-shadow: none;
    outline: none;
    background: #8C2703;
}

`;
const Input = styled.div`
  border: none;
  outline: none;
  box-shadow: none;

`;
const InputButton = styled.div`
button{
  margin-top:5px;
  margin-left:5px;
  font-weight:600;
  color:#8C2703;
  background:none;
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
      <InputButton>
        <button  onClick={handleEnter}> Add </button>
        <button  onClick={() => setOpen(false)}> X </button>
      </InputButton>
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
