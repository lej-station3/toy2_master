import React from 'react';
import { Card, Icon } from './card-styled.js';
import { ReactComponent as Trash } from './images/trash.svg';
import { ReactComponent as Edit } from './images/edit.svg';
import { useDispatch } from 'react-redux';
import { delCard } from '../../modules/list';

function TodoCard({ card, listId }) {
  const dispatch = useDispatch();

  return (
    <Card >
      <p>{card.text}</p>
      <Icon>
        <Trash 
          className="delIcon"
          onClick={() => dispatch(delCard({ parent: listId, child: card.id }))}/>
        <Edit 
          className="editIcon"/>
      </Icon>
    </Card>
  );
}
export default TodoCard;
