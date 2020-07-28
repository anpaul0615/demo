import React from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store/types';
import { loadText } from '../store/modules/text';
import { loadText2 } from '../store/modules/text2';

import Text from '../components/Text';
import Button from '../components/Button';

interface Props {}

const TextContainer: React.FC<Props> = () => {
  const textContent = useSelector((state:RootState) => state.text.content);
  const isFetching = useSelector((state:RootState) => state.text.fetching);
  const textContent2 = useSelector((state:RootState) => state.text2.content);
  const isFetching2 = useSelector((state:RootState) => state.text2.fetching);

  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(loadText());
  };
  const handleClick2 = () => {
    dispatch(loadText2());
  };

  return (
    <>
      <Button label={isFetching ? 'loading..' : 'GET'} onClick={handleClick} />
      <Text value={textContent} />
      <hr />
      <Button label={isFetching2 ? 'loading..' : 'GET2'} onClick={handleClick2} />
      <Text value={textContent2} />
    </>
  );
}

export default TextContainer;
