import React, {useReducer} from 'react';

interface CountInitialState {
    count: number
}

let countInitial: CountInitialState = {
    count: 0
}

function reducer(state: number, action: { type: string }) {

}

function Counter2() {
    const [state, dispatch] = useReducer(reducer, countInitial);

    return (
        <div>
            <p>Count: {state.count}</p>
            <button onClick={() => dispatch({type: 'increment'})}></button>
        </div>
    );
}

export default Counter2;