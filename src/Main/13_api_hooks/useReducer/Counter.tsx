import React, {useReducer} from 'react';

interface initialStateInterface {
    count: number
}

const initialState: initialStateInterface = {
    count: 0
}

function reducer(state: initialStateInterface, action: { type: string; }) {
    switch (action.type) {
        case 'increment':
            return {count: state.count + 1};
        case 'decrement':
            return {count: state.count - 1};
        default:
            throw new Error();
    }
}

function Counter() {
    const [state, dispatch] = useReducer(reducer, initialState);
    return (
        <>
            Count: {state.count}
            <button onClick={() => dispatch({type: 'decrement'})}>-</button>
            <button onClick={() => dispatch({type: 'increment'})}>+</button>
        </>
    );
}

export default Counter;