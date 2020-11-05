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
    accepts: ItemTypes.CARD,
    lastDroppedItem: null,
    cards: [
      {
        id: 0,
        text: '쓰레기 차우기',
        accepts: ItemTypes.CARD
      },
      {
        id: 1,
        text: '물병 닦기',
        accepts: ItemTypes.CARD
     
      },
    ],
  },
  {
    title: 'Doing',
    id: 1,
    accepts: ItemTypes.CARD,
    lastDroppedItem: null,
    cards: [
      {
        id: 0,
        text: '리덕스를하자',
        accepts: ItemTypes.CARD
      
      },
      {
        id: 1,
        text: '함수만들자',
        accepts: ItemTypes.CARD
   
      },
    ],
  },
  {
    title: 'Done',
    id: 2,
    accepts: ItemTypes.CARD,
    lastDroppedItem: null,
    cards: [
      {
        id: 0,
        text: '저녁 메뉴',
        accepts: ItemTypes.CARD
        
      },
      {
        id: 1,
        text: '핸드크림',
        accepts: ItemTypes.CARD
       
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
        accepts: ItemTypes.CARD,
        lastDroppedItem: null
       
      };
      listID +=1;
      const newState = produce(state,draft => { 
        draft.push(newList);
      });
      return newState;
    },

    [CHANGE_CARD]: (state, action) => {
      const dragCard = state[action.payload.listID].cards[action.payload.dragIndex];
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
        accepts: ItemTypes.CARD
       
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
    [CHANGE_LIST]:(state,action) => {

    }
  },
  initialState
);




//여기서 넥스트아이디가 새로운값 

// const ChangeType = (cardId,nextId) => {
//   console.log(nextId);
//   const nextState = produce(list,draft => { 
//     const idx = draft.findIndex(item => item.id === listID);
//     const cardIdx = draft[idx].cards.findIndex(card => card.id === cardId);
//     //변경하려고 하는 넥스트 아이디가 무엇인지 알아본다 string과 숫자 차이가 있는게 문제 
//     const nextIdx = draft.findIndex(item => item.id === nextId);
//     const card = draft[idx].cards[cardIdx];
//     draft[nextIdx].cards.push(card);
//     draft[idx].cards.splice(cardIdx,1);
//   });
//   dispatch(changeList(nextState));
// };