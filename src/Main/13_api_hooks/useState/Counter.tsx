import React, {useState} from 'react';

function Counter(props: any) {
    const initialCount: number = props.initialCount;
    const [count, setCount] = useState(props.initialCount);

    return (
        <div>
            <p>Count: {count}</p>
            <button onClick={() => setCount(initialCount)}>Reset</button>
            <button onClick={() => setCount((prevCount: number) => prevCount - 1)}>-</button>
            <button onClick={() => setCount((prevCount: number) => prevCount + 1)}>+</button>
        </div>
    )
}

export default Counter;