import React, {useEffect, useState} from 'react';

function Example2() {
    const [count, setCount] = useState<number>(0)

    useEffect(() => {
        document.title = `haz realizado click ${count} veces`;
    })

    return (
        <div>
            <p>haz realizado click {count} veces</p>
            <button onClick={() => setCount(count + 1)}>Click</button>
        </div>
    );
}

export default Example2;