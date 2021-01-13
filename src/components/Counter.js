import React, { useState } from 'react';
import styled from 'styled-components';

const Calc = styled.div`
  display: flex;
  width: 40vw;
  height: 200px;
  align-items: center;
  justify-content: center;
  background: #db3a00;
  padding: 10px;
  margin: 15px;
  border-radius: 30px;
`;

const Button = styled.button`
  height: 2rem;
  margin: 0.5rem;
`;

const Counter = () => {
  const [count, setCount] = useState(0);

  const handleOnClick = () => {
    setCount(count + 1);
  };

  return (
    <Calc>
      <Button onClick={handleOnClick}>CLICK ME</Button>
      <div>{count}</div>
    </Calc>
  );
};

export default Counter;
