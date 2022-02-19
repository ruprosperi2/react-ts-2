import React, {useEffect, useState} from 'react';

function Example() {
    const [count, setCount] = useState<number>(0)

    useEffect(() => {
        document.title = `Has hecho click ${count}`;
    })

    return (
        <div>
            <p>Haz presionado el botón {count}</p>
            <button onClick={() => setCount(count + 1)}>Click</button>
        </div>
    );
}

export default Example;