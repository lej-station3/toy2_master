import React from 'react';
import styled from 'styled-components';
import TodoCard from './todo-card';
import TodoButtonWrapper from '../todo-button/todo-button-wrapper';
import { useDispatch } from 'react-redux';
import { changeList } from '../../modules/list';

const List = styled.div`
  width: 300px;
  margin-right: 30px;
  background-color: #BF8563;  
  border-radius: 10px;
  h5{
  font-weight: 600;
  text-align: center;
  font-size: 16px;
}
li{
  list-style: none;
}
`;


//리스트 큰 창을 만들자
function TodoList({ data,listID }) {
  const dispatch = useDispatch();
  const { title, cards } = data;
  const moveCard = (dragIndex,hoverIndex) => {
    dispatch(changeList({ dragIndex,hoverIndex,listID }));
  };  
  

  return (
    <List>
      <h5>{title}</h5>
      {cards.map( (card,index) => {
        return(
          <TodoCard 
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