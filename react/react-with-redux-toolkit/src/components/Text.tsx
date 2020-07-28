import React from 'react';

interface Props {
  value: string;
}

const Text: React.FC<Props> = ({ value }) => {
  return (
    <div>
      {value}
    </div>
  );
}

export default Text;
