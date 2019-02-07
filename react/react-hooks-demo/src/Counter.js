import React, { useState, useEffect } from 'react';

// Hooks 는 함수형 컴포넌트에서만 사용!
const Counter = () => {
  const [value, setValue] = useState(0);
  const [value2, setValue2] = useState(false);

  useEffect(() => {
    // 이 함수는 render 가 마치고 난 다음에 실행됩니다!
    // 컴포넌트가 마운트 되거나 리렌더링이 마치고 나서 실행되는
    // componentDidMount 와 componentDidUpdate 와 비슷하다고 생각하시면 됩니다.
    console.log('rendered : ', value);
  });

  useEffect(() => {
    console.log('rendered with changed value2 :', value2, ', value : ', value);
  }, [value2]);  // value 값이 바뀔 때만 useEffect 가 호출됩니다.
  

  console.log('rendering : ', value);
  return (
    <div>
      <p>
        <b>{value}</b> pushed..!
      </p>

      {/*
        Hooks 는 컴포넌트의 Top-level 에서만 사용할 것
        (반복문, 조건문, 감싸진 함수에서는 사용금지)
      */}
      <button onClick={() => {
        if (value % 10 === 0)  setValue2(!value2);
        setValue(value + 1);
      }}>+1</button>
      
      <button onClick={() => {
        if (value % 10 === 0) setValue2(!value2);
        setValue(value - 1);
      }}>-1</button>

    </div>
  );
};

export default Counter;