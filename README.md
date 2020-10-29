 
 [INSERT_CARD]: (state, action) => {
      console.warn(action);
      const newCard = {
        id: cardID,
        text: action.payload.text,
      };
      cardID += 1;
      const newState = state.map(list => {
        if (list.id === action.payload.listID) {
          return  {
            ...list,
            //기존 카드 뒤에 새로운 카드를 붙여라
            cards: [...list.cards, newCard],
          };
        } else {
          return list;
        }
      });
      const newState = produce(state,draft => {
        state.map(list => {
          if(list.id === action.payload.listID) {
            return {
              cards: draft.push(newCard),
            };
          }else{
            return list;
          }
        });  
      });


  [INSERT_CARD]: (state, action) => {
      console.warn(action);
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