import React  from 'react';
import styled from 'styled-components';
// import { createGlobalStyle } from 'styled-components';
// import reset from 'styled-reset';
import { GlobalStyle } from '../styles/GlobalStyles';
import { useSelector } from 'react-redux';
import TodoList from '../component/todo-list/list';
import TodoListButton from '../component/todo-button/list-button';


const AppWrapper = styled.div`
  display: flex;
  flex-direction: row;
  margin-top:30px;
`;

function App() {
  const { list } = useSelector(state => state);
  return (
    <>
      <GlobalStyle/>
      <AppWrapper>
        {list.map((data,index) => (
          // listID만 따로 보내 줄 필요 없음 data로 통일 
          <TodoList 
            listId={data.id} 
            key={index} 
            data={data}     
          />
        ))}
        <TodoListButton />
      </AppWrapper >   
    </>
  );
}
export default App;
