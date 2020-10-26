import React, { useState } from "react";
import TodoCard from "./todo-card";
import TodoButtonWrapper from "../../todo-button/todo-button-wrapper";
import styled from "styled-components";

//리스트 큰 창을 만들자
function TodoList({ data, listID }) {
  const { title, cards } = data;

  return (
    <List>
      <h5>{title}</h5>
      {cards.map((card) => (
        <TodoCard key={card.id} text={card.text} />
      ))}
      <TodoButtonWrapper listID={listID} />
    </List>
  );
}

const List = styled.div`
  width: 300px;
  background-color: #ccc;
  border-radius: 3px;
`;

export default TodoList;
