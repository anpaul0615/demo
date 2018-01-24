import React from 'react';
import Counter from 'components/Counter';
import ActionButton from 'components/Counter/ActionButton';
import DisplayBoard from 'components/Counter/DisplayBoard';
import CounterContainer from 'containers/CounterContainer';

/* Component-Style */
const styles = {
    'root': {
        'width': '100%',
        'height': '100%',
        'textAlign': 'center',
    },
    'Title': {
        'margin': '0px auto 10px',
    }
}
/* Page-Component */
class CounterPage extends React.Component {
    componentWillUpdate(){
        console.log('CounterPage.componentWillUpdate :: ');
    }
    componentWillMount(){
        console.log('CounterPage.componentWillMount :: ');
    }
    componentDidMount(){
        console.log('CounterPage.componentDidMount :: ');
    }
    render() {
        const { increaseRandom, decreaseRandom, currentCount } = this.props;
        return (
            <div style={styles.root}>
                <h3 style={styles.Title}>Counter Page</h3>
                <Counter>
                    <ActionButton 
                        discription={'Increase Random'}
                        increaseRandom={increaseRandom} />
                    <ActionButton 
                        discription={'Decrease Random'}
                        decreaseRandom={decreaseRandom} />
                    <DisplayBoard 
                        currentCount={currentCount} />
                </Counter>
            </div>
        );
    }
};

/* Wrapping with Container */
export default CounterContainer(CounterPage);