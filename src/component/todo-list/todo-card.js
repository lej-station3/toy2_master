import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { lighten } from 'polished';
import produce from 'immer';
import styled from 'styled-components';

import { ReactComponent as SwapSvg } from './images/swap.svg';
import { changeList } from '../../modules/list';

const Card = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 300px;
  margin-bottom: 7px;
  font-size: 16px;
  color: #fff;
  background-color: #8C2703;
  &:hover{
    background-color: ${lighten('0.1', '#8C2703')} ;
  }
  h5{
    margin-left:30px;
    color: #fff;
  }
  .icon{
    margin-left:10px;
    opacity:0;
    &:hover{
    opacity:1;
    }
  }
`;

function TodoCard({ card,listID }) {
  const { list } = useSelector(state => state);
  const dispatch = useDispatch();
  const [open, setOpen] = useState(true);

  const ChangeType = (cardId,nextId) => {
    console.log(nextId)
    const nextState = produce(list,draft => {
      //지금 listID가 무엇인지 알아본다 
      const idx = draft.findIndex(item => item.id === listID);
      //자기므 card.id가 먼지 알아본다 
      const cardIdx = draft[idx].cards.findIndex(card => card.id === cardId);
      console.log('cardIdx',cardIdx);
      const nextIdx = draft.findIndex(item => item.id === nextId);
      console.log('nextIdx',nextIdx);
      const card = draft[idx].cards[cardIdx];
      console.log('card',card, idx);
      draft[nextIdx].cards.push(card);
      draft[idx].cards.splice(cardIdx,1);
    });

    console.log(nextState);
    dispatch(changeList(nextState));

  };


  return (
    <Card>
      <h5>{card.text}</h5>
      <span className="icon">
        {open ? (
          <SwapSvg onClick={() => setOpen(false)} width="25" />) :
          <select value={listID} onChange={e => ChangeType(card.id, +e.currentTarget.value)}>
          
            {list.map(item => {
              return(
                <option key={item.id} value={item.id}>
                  {item.title}
                </option>
              );
            })}
          </select>
        }
      </span>

    </Card>


  );
}
export default TodoCard;
