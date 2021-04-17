
import { useState } from 'react';
import './Counter.css';

function Counter() {
    // this is called array destructuring 
    const [count, setCount] = useState(5);
    // count is our state variable; the starting value 
    // setCount it how we will change the value for that data


    function handleReset() {
        setCount(0)  // use setCount to modify the state at runtime
    }
    function handleUp() {
        setCount(prevCount => prevCount + 1);
    }

    // like in html classes in React are specified as a string, separated by spaces. 
    let classes = "Counter";
    if (count < 0) {
        classes += " negative"
    }

    return (
        <div className={classes} >
            <h3>Counter</h3>
            <p className="Counter__count"> {count}</p>
            <p>
                <button type="button" onClick={() => setCount(prev => prev - 1)}>Down</button>
                {count !== 0 && <button type="button" onClick={handleReset} >Reset</button>}
                <button type="button" onClick={handleUp} >Up</button>
            </p>
        </div>
    );
}

export default Counter