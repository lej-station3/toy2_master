import React from 'react';
import TodoList from '../component/todo-list/todo-list';
import TodoListButton from '../component/todo-button/todo-list-button';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { createGlobalStyle } from 'styled-components';



const GlobalStyle = createGlobalStyle`
  html{
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }
  body{
    background-color:#f2f2f2;
  }
`;
const AppWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

function App() {
  // const { list } = useSelector(state => ({list:state.list}))
  const { list } = useSelector(state => state);

  console.log('list', list);
  return (
    <>
      <GlobalStyle />
      <h2>Trello</h2>
      <AppWrapper>
        {list.map(data => (
          // listID만 따로 보내 줄 필요 없음 data로 통일 
          <TodoList listID={data.id} key={data.id} data={data} />
        ))}
        < TodoListButton />
      </AppWrapper >
    </>
  );
}
export default App;

