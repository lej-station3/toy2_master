import React from "react";
import TodoList from "../component/todo-list/todo-list";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  html{
    box-sizing: border-box;
    padding: 0;
    margin: 0;
    font-size: 10px;
  }
  body{
    background-color:#fff;
  }
  `;
function App() {
  const { list } = useSelector((state) => state);
  const { listID } = list;

  const AppWrapper = styled.div`
    display: flex;
    flex-direction: row;
  `;

  return (
    <>
      <GlobalStyle />
      <h2>Trello</h2>
      {/* 바로 보내주면 에러남  */}
      <AppWrapper>
        {list.map((data) => (
          <TodoList listID={data.id} key={data.id} data={data} />
        ))}
      </AppWrapper>
    </>
  );
}

export default App;
