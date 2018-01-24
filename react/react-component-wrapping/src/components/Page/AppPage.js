import React from 'react';
import AppHeader from 'components/Common/AppHeader';
import AppBody from 'components/Common/AppBody';

/* Component-Style */
const styles = {
    'root': {
        'width': '100%',
        'height': '100%',
        'textAlign': 'center',
    },
}
/* Page-Component */
class AppPage extends React.Component {
    componentWillUpdate(){
        console.log('AppPage.componentWillUpdate :: ');
    }
    componentWillMount(){
        console.log('AppPage.componentWillMount :: ');
    }
    componentDidMount(){
        console.log('AppPage.componentDidMount :: ');
    }
    render() {
        return (
            <div style={styles.root}>
                <AppHeader />
                <AppBody />
            </div>
        );
    }
};

/* Wrapping with Container */
export default AppPage;