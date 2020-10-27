import { createAction, handleActions } from 'redux-actions';

// //리스트 액션 타입 설정

const INSERTLIST = 'todobutton/INSERTLIST';
const INSERTCARD = 'todobutton/INSERTCARD';
const CHANGECARD = 'todocard/CHANGECARD';

//액션 생성해주고

export const insertList = createAction(INSERTLIST);
export const insertCard = createAction(INSERTCARD);
export const changecard = createAction(CHANGECARD);
// export const insertCard = createAction(INSERTCARD, text => {
//   console.log('insertCArd', text)
//   return {
//     id: cardID++,
//     text,
//   };
// });

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
  //   [INSERTLIST]: (state, action) => {
  //     const newList = {
  //       title: action.payload,
  //       card: [],
  //       id: listID,
  //     };
  //     listID += 1;
  //     return [...state, newList];
  //   },
    [CHANGECARD]: (state,action) => {
      const changeList = {
        title: '',
        card: [],
        id:listID,
      };
      listID +=1;

      const newChange = state.map(card => {
        if(card.listID !== action.payload.listID){
          //카드의 listID를 바꿔줘라
        }else{
          return card;
        }
      });
      return newChange;
      
    },

    //액션페이로드정해주고
    [INSERTCARD]: (state, action) => {
      console.warn(action);
      const newCard = {
        id: cardID,
        text: action.payload.text,
      };
      cardID += 1;

      //초기값 돌면서 list.id가 액션들어온 listID랑 동일하면 넣어준드아아아
      const newState = state.map(list => {
        if (list.id === action.payload.listID) {
          return {
            ...list,
            //기존 카드 뒤에 새로운 카드를 붙여라
            cards: [...list.cards, newCard],
          };
        } else {
          return list;
        }
      });
      return newState;
    },
  },
  initialState

);



//상태 변경 함수가 필요하다
//그걸 리스트 함수로 만들어주기 

