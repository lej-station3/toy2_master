import { createAction, handleActions } from "redux-actions";

// //리스트 액션 타입 설정

const INSERTLIST = "app/INSERTLIST";
const INSERTCARD = "app/INSERTCARD";

//액션 생성해주고

export const insertList = createAction(INSERTLIST);
export const insertCard = createAction(INSERTCARD, (text) => ({
  id: cardID++,
  text,
}));

let listID = 2;
let cardID = 2;

//초기값만들고
const initialState = [
  {
    title: "할 일",
    id: 0,
    cards: [
      {
        id: 0,
        text: "리덕",
      },
      {
        id: 1,
        text: "스",
      },
    ],
  },
  {
    title: "하는 중",
    id: 1,
    cards: [
      {
        id: 0,
        text: "흑흑",
      },
      {
        id: 1,
        text: "허어어엉",
      },
    ],
  },
];

//리듀서만들기

export default handleActions(
  {
    // [INSERTLIST]: (state, action) => {
    //   const newList = {
    //     title: action.payload,
    //     card: [],
    //     id: listID,
    //   };
    //   listID += 1;
    //   return [...state, newList];
    // },

    //액션페이로드정해주고
    [INSERTCARD]: (state, action) => {
      console.warn(action);
      const newCard = {
        id: cardID,
        text: action.payload.text,
      };
      cardID += 1;

      //초기값 돌면서 list.id가 액션들어온 listID랑 동일하면 넣어준드아아아
      const newState = state.map((list) => {
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

// const listsReducer = (state = initialState, action) => {
//   switch (action.type) {
//     default:
//       return state;
//   }
// };

// export default listsReducer;
