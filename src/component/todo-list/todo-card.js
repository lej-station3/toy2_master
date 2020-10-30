import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import produce from 'immer';
import { Card,Select } from './card-styled.js';
import { ReactComponent as SwapSvg } from './images/swap.svg';
import { changeList } from '../../modules/list';

function TodoCard({ card,listID }) {
  const { list } = useSelector(state => state);
  const dispatch = useDispatch();
  const [open, setOpen] = useState(true);

  const ChangeType = (cardId,nextId) => {
    console.log(nextId);
    const nextState = produce(list,draft => { 
      const idx = draft.findIndex(item => item.id === listID);
      const cardIdx = draft[idx].cards.findIndex(card => card.id === cardId);
      //변경하려고 하는 넥스트 아이디가 무엇인지 알아본다 string과 숫자 차이가 있는게 문제 
      const nextIdx = draft.findIndex(item => item.id === nextId);
      const card = draft[idx].cards[cardIdx];
      draft[nextIdx].cards.push(card);
      draft[idx].cards.splice(cardIdx,1);
    });
    dispatch(changeList(nextState));
  };
  return (
    <Card>
      <h5>{card.text}</h5>
      <span className="icon">
        {open ? (
          <SwapSvg onClick={() => setOpen(false)} width="25" />) :
          //여기서 listID가 들어가면 안되는거임 
          <Select>
            <select value={listID} onChange={e => ChangeType(card.id, +e.currentTarget.value)}>
              {list.map(item => {
                return(
                  <option key={item.id} value={item.id}>
                    {item.title}
                  </option>
                );
              })}
            </select>          
          </Select>
        }
      </span>
    </Card>
  );
}
export default TodoCard;
