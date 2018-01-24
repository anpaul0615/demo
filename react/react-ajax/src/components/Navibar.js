import React from 'react';
import './Navibar.css';

import { Button } from 'semantic-ui-react';

const Navibar = ({postId,disabled,onClick})=>{
  return (
    <div className='Navibar'>
      <Button className='Navibar-left-button'
        color='teal'
        content='Previous'
        icon='left arrow'
        labelPosition='left'
        onClick={
          ()=>onClick('PREV')
        }
        disabled={disabled}
        />
      <div className='Navibar-page-num'>{postId}</div>
      <Button className='Navibar-right-button'
        color='teal'
        content='Next'
        icon='right arrow'
        labelPosition='right'
        onClick={
          ()=>onClick('NEXT')
        }
        disabled={disabled}
        />
    </div>
  )
};

export default Navibar;
