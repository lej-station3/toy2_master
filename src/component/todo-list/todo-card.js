import React,{ useRef } from 'react';
import { Card } from './card-styled.js';
import { useDrop,useDrag } from 'react-dnd';
import { ItemTypes } from '../ItemTypes.js';

function TodoCard({ card,index,moveCard }) {
  const ref = useRef(null);
  //드래그 하는 상태에 필요한 거 
  const [,drop] = useDrop({
    accept:ItemTypes.CARD,
    //해도 되고 안해도댐
    // 항목이 구성 요소 위에 놓이면 호출 
    hover(item,monitor) {
      if(!ref.current){
        return;
      }
      const dragIndex = item.index;
      const hoverIndex = index;
      //서로 섞이지 않도록 해주는 거 
      if(dragIndex === hoverIndex) {
        return;
      }
      // 크기 알려주는 함수
      const hoverBoundingRect = ref.current?.getBoundingClientRect();
      //bottm - top하면 딱 엘리먼트 세로 크기 나온당
      const hoverMiddleY = (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;
      //드래그 하고 마우스 마지막 기록
      const clientOffset = monitor.getClientOffset(); 
      const hoverClientY = clientOffset.y - hoverBoundingRect.top;
      if(dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
        return;
      }
      if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY){
        return;
      }
      moveCard(dragIndex,hoverIndex);
      item.index = hoverIndex;
    },
  });
  //isDragging은 드래그 시작하면 알려줌
  const [{ isDragging }, drag] = useDrag({
    item:{ type:ItemTypes.CARD,id:card.id,index },
    collect: monitor => ({
      isDragging:monitor.isDragging(),
    }),
  });
  const opacity = isDragging ? 0 :1;
  drag(drop(ref));
  return (
    <Card ref={ref} style={{ opacity }}>
      <p>{card.text}</p>
    </Card>
  );
}
export default TodoCard;