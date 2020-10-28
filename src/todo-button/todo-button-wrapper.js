import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { insertCard } from '../modules/list';
import { Button,InputSet,ButtonWrapper } from './styled.js';



function TodoButton({ setOpen, listID }) {
  console.log('listID', listID);
  const dispatch = useDispatch();
  const [text, setText] = useState('');

  const handleEnter = e => {
    e.preventDefault();
    handleinsertCard(text);
    setOpen(false);
  };

  const handleChange = e => {
    console.log('할 일', e.currentTarget.value);
    setText(e.currentTarget.value);
  };

  //여기서 ListID를 빼주는 게 관건이었다...
  const handleinsertCard = text => {
    console.log('text', listID, text);
    if (text) {
      dispatch(insertCard({ listID, text }));
      setText('');
    }
  };

  
  return (
    <InputSet>
      <textarea onChange={handleChange} value={text} />
      <ButtonWrapper>
        <button onClick= {handleEnter}>+</button>
        <button onClick= {() => setOpen(false)}>x</button>
      </ButtonWrapper>
    
    </InputSet>
  );
}



function TodoButtonWrapper({ listID }) {
  const [open, setOpen] = useState(false);
  //지워지는 함수 false면 지워라
  return (
    <Button>
      {open ? (
        <TodoButton listID= {listID} setOpen={setOpen} />
      ) : (
        <p onClick= {() => setOpen(!open)}>Add a Card</p>
      )}
    </Button>
  );
}

export default TodoButtonWrapper;
