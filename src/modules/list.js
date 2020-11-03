import { createAction, handleActions } from 'redux-actions';
import produce from 'immer';

///리스트 액션 타입 설정
const CHANGE_LIST = 'todobutton/CHANGE_LIST';
const INSERT_CARD = 'todobutton/INSERTCARD';

//액션 생성해주고
export const changeList = createAction(CHANGE_LIST);
export const insertCard = createAction(INSERT_CARD);

let listID = 3;
let cardID = 2;

//초기값만들고
const initialState = [
  {
    title: 'ToDo', 
    id: 0,
    cards: [
      {
        id: 0,
        text: '쓰레기 차우기',
      },
      {
        id: 1,
        text: '물병 닦기',
      },
    ],
  },
  {
    title: 'Doing',
    id: 1,
    cards: [
      {
        id: 0,
        text: '리덕스를하자',
      },
      {
        id: 1,
        text: '함수만들자',
      },
    ],
  },
  {
    title: 'Done',
    id: 2,
    cards: [
      {
        id: 0,
        text: '저녁 메뉴',
      },
      {
        id: 1,
        text: '핸드크림',
      },
    ],
  },
];

//리듀서만들기
export default handleActions(
  {
    [CHANGE_LIST]: (state, action) => {
      const newCard = state[action.payload.listID].cards[action.payload.dragIndex];
      const newState = produce(state,draft =>{
        draft[action.payload.listID].cards.splice(action.payload.dragIndex,1);
        draft[action.payload.listID].cards.splice(action.payload.hoverIndex,0,newCard);
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


// const newState = produce(state,draft => {
//   const dragCard = state[action.payload.listID];
//   draft.splice(dragIndex,1);
//   draft.splice(hoverIndex,0,dragCard);
// })