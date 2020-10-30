import React from 'react';
import TodoList from '../component/todo-list/todo-list';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { createGlobalStyle } from 'styled-components';
// import TodoListButton from './todo-button/todo-list-button';

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
  const { list } = useSelector(state => state);

  console.log('list', list);
  return (
    <>
      <GlobalStyle />
      <h2>Trello</h2>
      {/* 바로 보내주면 에러남  */}
  
      <AppWrapper>
        {list.map(data => (
          <TodoList  listID={data.id} key={data.id} data={data} />
        ))}
      </AppWrapper>
      {/* <TodoListButton/> */}
    </>
  );
}
export default App;

