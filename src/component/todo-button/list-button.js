import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { insertList } from '../../modules/list.js';
import { Title, Input, ListBtn } from './list-button-styled';

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
      <ListBtn>
        <button  onClick={handleEnter}> Add </button>
        <button  onClick={() => setOpen(false)}> X </button>
      </ListBtn>
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
