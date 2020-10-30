import React, { useState } from 'react';
import { Card,Select } from './card-styled.js';
import { useSelector, useDispatch } from 'react-redux';
import { ReactComponent as SwapSvg } from './images/swap.svg';
import produce from 'immer';
import { changeList } from '../../modules/list';

function TodoCard({ card,listID }) {
  const { list } = useSelector(state => state);
  const dispatch = useDispatch();
  const [open, setOpen] = useState(true);

  const changeType = e => {
    const { value:nextId } = e.currentTarget;
    const nextState = produce(list,draft => { 
      const idx = draft.findIndex(item => item.id === listID);
      const cardIdx = draft[idx].cards.findIndex(newCard => newCard.id === card.id);
      //변경하려고 하는 넥스트 아이디가 무엇인지 알아본다 string과 숫자 차이가 있는게 문제 
      const nextIdx = draft.findIndex(item => item.id === +nextId);
      const cardChange = draft[idx].cards[cardIdx];
      draft[nextIdx].cards.push(cardChange);
      draft[idx].cards.splice(cardIdx,1);
    });
    dispatch(changeList(nextState));
  };
  return (
    <Card>
      <p>{card.text}</p>
      <span className="icon">
        {open ? (
          <SwapSvg onClick={() => setOpen(false)} width="25" />) :
          //여기서 listID가 들어가면 안되는거임 
          <Select>
            {/* <select value={listID} onChange={e => ChangeType(card.id, +e.currentTarget.value)}> */}
            <select value={listID} onChange={changeType}>
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
