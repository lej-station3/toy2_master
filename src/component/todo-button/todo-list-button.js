import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { insertList } from '../../modules/list.js';
import { InputSet,ButtonWrapper } from './styled.js';

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
    <InputSet>
      <input  onChange={changeTitle} value={title} />
      <ButtonWrapper>
        <button onClick={handleInsetList}> Add </button>
        <button onClick={() => setOpen(false)}> X </button>
      </ButtonWrapper>
    </InputSet>
  );
}

function TodoListButton() {
  const [open, setOpen] = useState(false);
  const [title, setTitle] = useState('');
  return(
    <>
      { open ? (
        <TitleInput title={title} setTitle={setTitle} setOpen={setOpen} / >
      ): (<button onClick={() => setOpen(!open)}> 
        Add a List </button>
      )}
    </>
  );

}
export default TodoListButton;
