import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { insertCard } from '../../modules/list';
import { CardButton,InputSet,ButtonWrapper } from './styled.js';

function TodoButton({ data, setOpen, listID }) {
  const dispatch = useDispatch();
  const [text, setText] = useState('');

  const handleEnter = e => {
    e.preventDefault();
    handleInsertCard(text);
    setOpen(false);
  };  

  const handleChange = e => {
    console.log('할 일', e.currentTarget.value);
    setText(e.currentTarget.value);
  };

  //여기서 ListID를 빼주는 게 관건이었다...
  const handleInsertCard = text => {
    console.log('cardtext', listID, text);
    if (text) {
      dispatch(insertCard({ listID, text }));
      setText('');
    }
  };

  return (
    <InputSet>
      <textarea type="text" onChange={handleChange} value={text} />
      <ButtonWrapper>
        <button onClick={handleEnter}> Add </button>
        <button onClick={() => setOpen(false)}> X </button>
      </ButtonWrapper>
    </InputSet>
  );
}

function TodoButtonWrapper({ listID,data }) {
  const [open, setOpen] = useState(false);

  return (
    <CardButton>
      {open ? (
        <TodoButton data = {data} listID={listID} setOpen={setOpen} />
      ) : (
        <p onClick={() => setOpen(!open)}>Add a Card</p>
      )}
    </CardButton>
  );
}
export default TodoButtonWrapper;




// const handleListEnter = e => {
//   e.preventDefault();
//   handleInsertList(text);
//   setOpen(false);
// };  

// const handleInsertList = text => {
//   if(text) {
//     dispatch(insertList({ listID, text }));
//   }
// };