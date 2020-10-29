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
      //지금 listID가 무엇인지 알아본다 
      const idx = draft.findIndex(item => item.id === listID);
      //자기의 card.id가 먼지 알아본다 
      const cardIdx = draft[idx].cards.findIndex(card => card.id === cardId);
      console.log('cardIdx',cardIdx);
      //변경하려고 하는 넥스트 아이디가 무엇인지 알아본다 string과 숫자 차이가 있는게 문제 
      const nextIdx = draft.findIndex(item => item.id === nextId);
      console.log('nextIdx',nextIdx);
      //현재설정된카드 
      const card = draft[idx].cards[cardIdx];
      console.log('card',card, idx);
      //그 카드를 다시 넣어준다 
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
