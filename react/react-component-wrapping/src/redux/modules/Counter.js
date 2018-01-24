import * as CounterService from 'services/Counter';

/**
 * Action Types
 */
// INCREASE
const INCREASE_BEFORE = 'Counter/INCREASE_BEFORE';
const INCREASE_SUCCESS = 'Counter/INCREASE_SUCCESS';
const INCREASE_FAIL = 'Counter/INCREASE_FAIL';
// DECREASE
const DECREASE_BEFORE = 'Counter/DECREASE_BEFORE';
const DECREASE_SUCCESS = 'Counter/DECREASE_SUCCESS';
const DECREASE_FAIL = 'Counter/DECREASE_FAIL';

/**
 * Action Creators
 */
export function increaseRandom(dispatch){
    return async function(){
        try {
            // before
            dispatch({
                type: INCREASE_BEFORE,
            });
            // pending
            const increaseValue = await CounterService.getRandomValue();
            // after
            dispatch({
                type: INCREASE_SUCCESS,
                data: {
                    pending: false,
                    increaseValue,
                }
            });
        } catch(err) {
            console.log(err);
            dispatch({
                type: INCREASE_FAIL,
                data: {
                    err,
                }
            });
        }
    }
};
export function decreaseRandom(dispatch){
    return async function(){
        try {
            // before
            dispatch({
                type: DECREASE_BEFORE,
            });
            // pending
            const decreaseValue = await CounterService.getRandomValue();
            // after
            dispatch({
                type: DECREASE_SUCCESS,
                data: {
                    pending: false,
                    decreaseValue,
                }
            });

        } catch(err) {
            console.log(err);
            dispatch({
                type: DECREASE_FAIL,
                data: {
                    err,
                }
            });
        }
    }
};

/**
 * Reducer
 */
const initialState = {
    pending: false,
    count: 0,
};
export default function reducer(state=initialState, action) {
    switch(action.type) {
    // INCREASE
    case INCREASE_BEFORE:
        return {
            ...state,
            pending: true,
        };
    case INCREASE_SUCCESS:
        return {
            ...state,
            count: (state.count + action.data.increaseValue),
        };
    case INCREASE_FAIL:
        return {
            ...state,
            pending: false,
        };
    // DECREASE
    case DECREASE_BEFORE:
        return {
            ...state,
            pending: true,
        };
    case DECREASE_SUCCESS:
        return {
            ...state,
            count: (state.count - action.data.decreaseValue),
        };
    case DECREASE_FAIL:
        return {
            ...state,
            pending: false,
        };
    default:
        return state;
    }
};