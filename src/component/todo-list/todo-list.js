import React, { useState } from 'react';
import styled from 'styled-components';
import TodoCard from './todo-card';
import TodoButtonWrapper from '../todo-button/todo-card-button';
import { useDispatch } from 'react-redux';
import { changeCard } from '../../modules/list';
import { useDrop } from 'react-dnd';
import {ItemTypes} from '../ItemTypes';
import { NativeTypes } from 'react-dnd-html5-backend';

const List = styled.div`
  width: 300px;
  margin-right: 30px;
  background-color: #55967e;  
  border-radius: 10px;
  h2{
    display:flex;
    align-items:center;
    justify-content:center;
    height:50px;
    background-color:#fff;
    color:#263959;
    font-size: 20px;
}
`;

function TodoList({ data,listID }) {
  const dispatch = useDispatch();
  const { title, cards } = data;

  const moveCard = (dragIndex,hoverIndex) => {
    dispatch(changeCard({ dragIndex,hoverIndex,listID }));
  };  
  
  return (
    <List>
      <h2>{title}</h2>
      {cards.map( (card,index) => {
        return(
          <TodoCard 
            listID={listID}
            key={card.id} 
            index={index} 
            card={card} 
            moveCard={moveCard}
          />
        );
      })}
      <TodoButtonWrapper listID={data.id}/>
    </List>

  );
}

export default TodoList;
