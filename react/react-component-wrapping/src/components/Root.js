import React from 'react';
import AppPage from 'components/Page/AppPage';
import CounterPage from 'components/Page/CounterPage';

/* Style */
const styles = {
    root: {
        'width': '100%',
        'height': '100vh',
    },
    AppPage: {
        'width': '100%',
        'height': '300px',
        'border': 'solid 1px rgba(0, 0, 100, 0.10)',
        'backgroundColor': 'rgba(0, 0, 100, 0.20)',
    },
    CounterPage: {
        'width': '100%',
        'height': '200px',
        'border': 'solid 1px rgba(100, 0, 0, 0.10)',
        'backgroundColor': 'rgba(100, 0, 0, 0.20)',
    },
};
/* Component */
const Root = ()=>{
    return (
        <div style={styles.root}>
            <div style={styles.AppPage}>
                <AppPage />
            </div>
            <div style={styles.CounterPage}>
                <CounterPage />
            </div>
        </div>
    );
};
export default Root;