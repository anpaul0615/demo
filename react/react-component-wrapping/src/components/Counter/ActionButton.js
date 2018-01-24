import React from 'react';

/* Component-Style */
const styles = {
    'Button': {
        'width': '100px',
        'height': 'auto',
    },
}
/* Component */
const ActionButton = (props)=>{
    const { discription, increaseRandom, decreaseRandom } = props;
    return (
        <button style={styles.Button} 
            onClick={(event)=>{ discription==='Increase Random' 
                                ? increaseRandom() 
                                : decreaseRandom(); }} >
            {discription}
        </button>
    );
}
export default ActionButton;