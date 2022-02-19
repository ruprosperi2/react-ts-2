import React, {useEffect, useState} from 'react';

function Example3() {
    const [count, setCount] = useState<number>(0);

    useEffect(() => {
        const intervalo: any = setInterval(() => {
            setCount(() => count + 2)
        }, 1000);
        return ()=> clearInterval(intervalo);
    },[])

    return (
        <div>
            <p>Se ha incrementado el valor del contador en {count}</p>
        </div>
    )
}

export default Example3;