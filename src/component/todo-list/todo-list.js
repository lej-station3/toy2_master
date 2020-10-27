import React, { useState } from 'react';
import TodoCard from './todo-card';
import TodoButtonWrapper from '../../todo-button/todo-button-wrapper';
import styled from 'styled-components';


const List = styled.div`
  width: 300px;
  height:500px;
  margin-right: 30px;
  background-color: #BF8563;
  border-radius: 10px;
  h5{

  font-weight: 600;
  text-align: center;
  font-size: 16px;
}
`;


//리스트 큰 창을 만들자
function TodoList({ data, listID }) {
  const { title, cards } = data;

  return (
    <List>
      <h5>{title}</h5>
      {cards.map(card => (
        <TodoCard key={card.id} text={card.text} />
      ))}
      <TodoButtonWrapper listID={listID} />
    </List>
  );
}



export default TodoList;
