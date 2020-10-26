import React, { useState } from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { insertCard } from "../modules/list";

function TodoButton({ setOpen, listID }) {
  console.log("listID", listID);
  const dispatch = useDispatch();
  const [text, setText] = useState("");

  const handleEnter = (e) => {
    e.preventDefault();
    handleinsertCard(text);
    setOpen(false);
  };

  const handleChange = (e) => {
    console.log("할 일", e.currentTarget.value);
    setText(e.currentTarget.value);
  };

  const handleinsertCard = (text, listID) => {
    console.log("text", text);
    if (text) {
      dispatch(insertCard(listID, text));
      setText("");
    }
  };

  return (
    <>
      <input placeholder="할 일" onChange={handleChange} value={text} />
      <button onClick={handleEnter}>Add Card</button>
      <button onClick={() => setOpen(false)}>x</button>
    </>
  );
}

function TodoButtonWrapper({ listID }) {
  const [open, setOpen] = useState(false);
  //지워지는 함수 false면 지워라
  return (
    <>
      {open ? (
        <TodoButton listID={listID} setOpen={setOpen} />
      ) : (
        <p onClick={() => setOpen(!open)}>Add a Card</p>
      )}
    </>
  );
}

export default TodoButtonWrapper;
