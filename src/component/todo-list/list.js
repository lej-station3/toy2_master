import React,{ useRef,useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { delList } from '../../modules/list';
import { List, ListTitle } from './list-styled';
import TodoCard from './card';
import TodoButtonWrapper from '../todo-button/card-button';
import Sortable from 'sortablejs';
import { ReactComponent as Trash } from './images/trash.svg';

function TodoList({ data,listId }) {
  const dispatch = useDispatch();
  const { title, cards } = data;
  const dragRef = useRef();



  useEffect(()=>{
    Sortable.create(dragRef.current,{
      group:'sorting',
      sort:true
    });
  },[]);
  return (
    <List>
      <ListTitle>
        <h2>{title}</h2>
        <Trash 
          className="icon"
          onClick={ () => dispatch(delList(listId))}
        />
      </ListTitle>
      <div ref={dragRef}>
        {cards.map(card => {
          return(
            <TodoCard 
              key={card.id} 
              card={card}
           
              listId={listId}
            />
          );
        })}
      </div>
      <TodoButtonWrapper listID={data.id}/>
    </List>

  );
}

export default TodoList;
