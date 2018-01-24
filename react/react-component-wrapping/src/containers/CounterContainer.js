import { connect } from 'react-redux';
import * as CounterRedux from 'redux/modules/Counter';

/* Container */
export default function(App){
    return connect(
        state => ({
            currentCount : state.Counter.count,
        }),
        dispatch => ({
            increaseRandom: ()=>{
                CounterRedux.increaseRandom(dispatch)();
            },
            decreaseRandom: ()=>{
                CounterRedux.decreaseRandom(dispatch)();
            },
        }),
    )(App);
};