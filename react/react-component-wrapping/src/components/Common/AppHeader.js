import React from 'react';
import logo from './logo.svg';

/* Component */
const styles = {
  'root': {
    'backgroundColor': '#222',
    'height': '150px',
    'padding': '20px',
    'color': 'white',
  },
  'AppLogo': {
    'height': '80px',
  },
  'AppTitle': {
    'fontSize': '1.5em',
  },
}
/* Component */
const AppHeader = ()=>{
    return (
        <header style={styles.root}>
            <img style={styles.AppLogo} alt="logo" src={logo} />
            <h1 style={styles.AppTitle}>Welcome to React</h1>
        </header>
    );
}
export default AppHeader;