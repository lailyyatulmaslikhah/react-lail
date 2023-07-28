import React, { useState } from 'react';

function Counterusestate() {
    const [count, setCount] = useState(0);

    const increment = () => {
        setCount(count + 1);
    };

    return (
        <div>
        <p><center>Count: {count}</center></p>
        <button onClick={increment}>Increment</button>
        </div>
        );
}
export default Counterusestate;