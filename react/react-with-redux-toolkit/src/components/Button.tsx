import React from 'react';

interface Props {
  label: string;
  onClick: Function;
}

const Button: React.FC<Props> = ({ label, onClick }) => {
  function handleClick(event: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    const { currentTarget } = event;
    onClick(currentTarget.value);
  }

  return (
    <button onClick={handleClick}>
      {label}
    </button>
  );
}

export default Button;
