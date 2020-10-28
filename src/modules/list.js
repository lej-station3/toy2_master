import { createAction, handleActions } from 'redux-actions';
import produce from 'immer';

// //리스트 액션 타입 설정

const INSERTLIST = 'todobutton/INSERTLIST';
const CHANGE_LIST = 'todobutton/CHANGE_LIST';
const INSERTCARD = 'todobutton/INSERTCARD';


//액션 생성해주고

export const insertList = createAction(INSERTLIST);
export const changeList = createAction(CHANGE_LIST)
export const insertCard = createAction(INSERTCARD);



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
      return action.payload;
    },
    
  //   [INSERTCARD]: (state, action) => {
  //     console.warn(action);
  //     const newCard = {
  //       id: cardID,
  //       text: action.payload.text,
  //     };
  //     cardID += 1;

  //     //초기값 돌면서 list.id가 액션들어온 listID랑 동일하면 넣어준드아아아
  //     const newState = state.map(list => {
  //       if (list.id === action.payload.listID) {
  //         return {
  //           ...list,
  //           //기존 카드 뒤에 새로운 카드를 붙여라
  //           cards: [...list.cards, newCard],
  //         };
  //       } else {
  //         return list;
  //       }
  //     });
  //     return newState;
  //   },
  // },
  [INSERTCARD] : (state,action) => {
    const newState = 
  }
    
  initialState

);


