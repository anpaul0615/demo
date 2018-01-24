import React from 'react';

/* Component-Style */
const styles = {
    'Board': {
        'width': '100%',
        'height': 'auto',
        'border': 'solid 1px rgba(0, 0, 0, 0.12)',
    },
}
/* Component */
const DisplayBoard = (props)=>{
    const { currentCount } = props;
    return (
        <div style={styles.Board}>
            {currentCount}
        </div>
    );
}
export default DisplayBoard;