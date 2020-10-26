import React from "react";
import styled from "styled-components";

const Card = styled.div`
  width: 200px;
  margin: 10px;
  padding: 10px;
  font-size: 12px;
  color: #f2f2f2;
  background-color: #000;
`;

function TodoCard({ text }) {
  console.log("카드text", text);
  return (
    <Card>
      <h5>{text}</h5>
    </Card>
  );
}

export default TodoCard;
