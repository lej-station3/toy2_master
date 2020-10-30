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


function TitleInput({ title,setTitle,setOpen }){
  const dispatch = useDispatch();

  const changeTitle = e => {
    console.log('리스트타이틇', e.currentTarget.value);
    setTitle(e.currentTarget.value);
  };

  const handleInsetList = title => {
    if(title) {
      dispatch(insertList(title));
    }
  };


  return(
    <Input>
      <input  onChange={changeTitle} value={title} />
      <InputButton>
        <button onClick={handleInsetList}> Add </button>
        <button onClick={() => setOpen(false)}> X </button>
      </InputButton>
    </Input>
  );
}

function TodoListButton() {
  const [open, setOpen] = useState(false);
  const [title, setTitle] = useState('');
  return(
    <Title>
      { open ? (
        <TitleInput title={title} setTitle={setTitle} setOpen={setOpen} / >
      ): (<button onClick={() => setOpen(!open)}> 
        Add a List </button>
      )}
    </Title>
  );

}
export default TodoListButton;
