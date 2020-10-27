import React, { useState } from 'react';
import styled from 'styled-components';
import { lighten } from 'polished';
import { ReactComponent as SwapSvg } from './images/swap.svg';


const Card = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 300px;
  margin-bottom: 7px;
  font-size: 16px;
  color: #fff;
  background-color: #8C2703;
  &:hover{
    background-color: ${lighten('0.1', '#8C2703')} ;
  }
  h5{
    margin-left:30px;
    color: #fff;
  }
  .icon{
    margin-left:10px;
    opacity:0;
  &:hover{
   opacity:1;
  }
  }
`;

function TodoCard({ text }) {
  const [open, setOpen] = useState(true);
  const [selectType, selectSetType] = useState(['Doing', 'Done']);
  const Type = selectType.map(type => type);

  const handleChange = e => {
    console.log((selectType[e.target.value]));
  };

  const handleSubmit = e => {
    e.preventDefault();
    // if((selectType[e.target.value])){
    //   disPatch()
    // }
  };

  return (
    <Card>
      <h5>{text}</h5>
      <span className="icon">
        {open ? (
          <SwapSvg
            onClick={() => setOpen(false)} width="25"
          />) :
          <form onSubmit={handleSubmit} >
            <select onChange={handleChange}> {Type.map((type, key) =>
              <option value={key}>{type}</option>
            )} </select>
            <button type="submit">Change</button>
          </form>


        }
      </span>

    </Card>


  );
}
export default TodoCard;
