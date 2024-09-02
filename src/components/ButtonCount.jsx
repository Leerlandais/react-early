import { useState } from 'react';
function ButtonCount() {
    const [count, setCount] = useState(0);

    function countClick() {
        setCount(count + 1);
    }
    return(
        <button className="myButton" onClick={countClick}>
            Cliqué {count} fois
        </button>
    );
}

export default ButtonCount;

