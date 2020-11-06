import { createAction, handleActions } from 'redux-actions';
import produce from 'immer';
import { ItemTypes } from '../component/ItemTypes';

///리스트 액션 타입 설정
const INSERT_LIST = 'todolistbutton/INSERT_LIST';
const CHANGE_LIST = 'todobutton/CHANGE_LIST';
const INSERT_CARD = 'todobutton/INSERTCARD';
const CHANGE_CARD = 'todobutton/CHANGE_CARD';



//액션 생성해주고
export const insertList = createAction(INSERT_LIST);
export const changeList = createAction(CHANGE_LIST);
export const insertCard = createAction(INSERT_CARD);
export const changeCard = createAction(CHANGE_CARD);


let listID = 3;
let cardID = 2;

//초기값만들고
const initialState = [
  {
    title: 'ToDo', 
    id: 0,
    accepts:ItemTypes.CARD,
    lastDroppedItem:null,
    cards: [
      {
        id: 0,
        text: '쓰레기 차우기',
        type:ItemTypes.CARD,
      
      },
      {
        id: 1,
        text: '물병 닦기',
        type:ItemTypes.CARD,
      },
    ],
  },
  {
    title: 'Doing',
    id: 1,
    accepts:ItemTypes.CARD,
    lastDroppedItem:null,
    cards: [
      {
        id: 0,
        text: '리덕스를하자',
        type:ItemTypes.CARD,
      },
      {
        id: 1,
        text: '함수만들자',
        type:ItemTypes.CARD,
      },
    ],
  },
  {
    title: 'Done',
    id: 2,
    accepts:ItemTypes.CARD,
    lastDroppedItem:null,
    cards: [
      {
        id: 0,
        text: '저녁 메뉴',      
        type:ItemTypes.CARD,
      },
      {
        id: 1,
        text: '핸드크림',
        type:ItemTypes.CARD,
      },
    ],
  },
];

//리듀서만들기
export default handleActions(
  {
    [INSERT_LIST] : (state,action) => {
      const newList = {
        title:action.payload,
        cards:[],
        id:listID,
        type:ItemTypes.CARD,   
      };
      listID +=1;
      const newState = produce(state,draft => { 
        draft.push(newList);
      });
      return newState;
    },
    [CHANGE_LIST]:(state,action) => {
      
    },
    [CHANGE_CARD]: (state, action) => {
      //현재드래그하는카드 
      const dragCard = state[action.payload.listID].cards[action.payload.dragIndex];
      console.log('dragIndex',dragCard);
      //현재 카드가 있는 카드를 없애고 그담에 호버(옮긴 곳에 추가해라)
      const newState = produce(state,draft =>{
        draft[action.payload.listID].cards.splice(action.payload.dragIndex,1);
        draft[action.payload.listID].cards.splice(action.payload.hoverIndex,0,dragCard);
      });  
      return newState;
    },

    [INSERT_CARD]: (state, action) => {
      const newCard = {
        id: cardID,
        text: action.payload.text,
      };
      cardID += 1;
      //state 현재값, draft 이제 바뀔값, 그래서 draft.map으로 해줘야 하는거임!!
      const newState = produce(state, draft => { 
        draft.map(list => {
          if(list.id === action.payload.listID) {
            return {
              cards: list.cards.push(newCard),
            };
          } 
        });  
      });
      return newState;
    }, 
  },
  initialState
);




// [CHANGE_LIST] : (state,action) => {
//   const newState = produce(state,draft => {
//     const idx = draft.findIndex( item => item.id === listID);
//     const cardIdx = draft[idx].cards.findIndex(card => card.id === cardId);
//     const nextIdx = draft.findIndex( item => item.id === nextId);
//     const cardChange = draft[idx].cards[cardIdx];
//     draft[nextIdx].cards.push(cardChange);
//     draft[idx].cards.splice(cardIdx,1);
//   });
//   return(newState);
// },