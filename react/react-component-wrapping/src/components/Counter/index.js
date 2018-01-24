import React from 'react';

/* Component-Style */
const styles = {
    'root': {
        'width': '100%',
    },
}
/* Component */
const Counter = (props)=>{
    const [ IncreaseButton, DecreaseButton, DisplayBoard ] = props.children;
    return (
        <div style={styles.root}>
            {IncreaseButton}
            {DecreaseButton}
            {DisplayBoard}
        </div>
    );
}
export default Counter;