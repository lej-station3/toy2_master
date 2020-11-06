import React from 'react';
import { Card } from './card-styled.js';


function TodoCard({ card,index,moveCard,listID }) {
 
  return (
    <Card >
      <p>{card.text}</p>
    </Card>
  );
}
export default TodoCard;




// const ref = useRef(null);
// //여기서 drop은 드롭 타겟에 부분에 .. 커넥터 기능 
// const [,drop] = useDrop({
//   accept:ItemTypes.CARD,
//   // 항목이 구성 요소 위에 놓이면 호출. 드래그 한 뒤 어떻게 해줄 것이냐  
//   hover(item,monitor) {
//     if(!ref.current){
//       return;
//     }
//     const dragIndex = item.index;
//     const hoverIndex = index;
//     //서로 섞이지 않도록 해주는 거 
//     if(dragIndex === hoverIndex) {
//       return;
//     }
//     // 크기 알려주는 함수
//     const hoverBoundingRect = ref.current?.getBoundingClientRect();
//     //bottm - top하면 딱 엘리먼트 세로 크기 나온당
//     const hoverMiddleY = (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;
//     //드래그 하고 마우스 마지막 기록
//     const clientOffset = monitor.getClientOffset(); 
//     const hoverClientY = clientOffset.y - hoverBoundingRect.top;
//     if(dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
//       return;
//     }
//     if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY){
//       return;
//     }
//     moveCard(dragIndex,hoverIndex);
//     item.index = hoverIndex;
//   },
// });
// //isDragging은 드래그 시작하면 알려줌
// const [{ isDragging }, drag] = useDrag({
//   item:{ type:ItemTypes.CARD,id:card.id,index },
//   collect: monitor => ({
//     isDragging:monitor.isDragging(),
//   }),
// });
// drag(drop(ref));
// const opacity = isDragging ? 0 :1;