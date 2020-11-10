import { createAction, handleActions } from 'redux-actions';
import produce from 'immer';

///리스트 액션 타입 설정
const INSERT_LIST = 'todolistbutton/INSERT_LIST';
const INSERT_CARD = 'todobutton/INSERTCARD';
const DEL_LIST = 'list/DEL_LIST';
const DEL_CARD = 'card/DEL_CARD';


//액션 생성해주고
export const insertList = createAction(INSERT_LIST);
export const insertCard = createAction(INSERT_CARD);         
export const delList = createAction(DEL_LIST);
export const delCard = createAction(DEL_CARD);

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
    [DEL_LIST]: (state,action) => {
      console.warn('action',action);
      const newState = produce( state,draft => {
        //listID가 아니고 내가 선택한 그 지점의 id를 찾아야하니까 action.payload로 
        const idx = draft.findIndex( list => list.id === action.payload);
        //오브젝트 안에서 slice를 해라! 라는거라 안된거임 
        draft.splice(idx,1);
      });
      return newState;
    },
   
    [DEL_CARD]: (state,action) =>{
      const newState = produce(state,draft => {
        const idx = draft.findIndex( item => item.id === action.payload.parent);
        console.log('action.payload',action.payload);
        const cardIdx = draft[idx].cards.findIndex(card => card.id === action.payload.child);
        draft[idx].cards.splice(cardIdx,1);
      });
      return newState;
    },

    [INSERT_LIST]: (state,action) => {
      const newList = {
        title:action.payload,
        cards:[],
        id:listID,
        
      };
      listID +=1;
      const newState = produce(state,draft => { 
        draft.push(newList);
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




