import React from 'react';
import PropTypes from 'prop-types';
import './Navibar.css';

import { Button } from 'semantic-ui-react';

const Navibar = ({postId,fetching,handleNavibarClick})=>{
  return (
    <div className='Navibar'>
      <Button className='Navibar-left-button'
        color='teal'
        content='Previous'
        icon='left arrow'
        labelPosition='left'
        onClick={()=>handleNavibarClick(postId-1)}
        disabled={fetching}
        />
      <div className='Navibar-page-num'>
        {postId}
        </div>
      <Button className='Navibar-right-button'
        color='teal'
        content='Next'
        icon='right arrow'
        labelPosition='right'
        onClick={()=>handleNavibarClick(postId+1)}
        disabled={fetching}
        />
    </div>
  )
};
Navibar.propTypes = {
  postId: PropTypes.number,
  fetching: PropTypes.bool,
  handleNavibarClick: PropTypes.func
};
Navibar.defaultProps = {
  postId: 1,
  fetching: false,
  handleNavibarClick: ()=>{ console.log('handleNavibarClick not defined'); }
};

export default Navibar;
