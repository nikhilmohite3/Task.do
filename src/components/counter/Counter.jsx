import { useState } from 'react';
import { PropTypes } from 'prop-types';
import CounterButton from './CounterButton';

export default function Counter() {
    // useState returns array of 2 things
    // 1- current count
    // 2- a function to update the argument 1
    // So deconstruct the useState output to arr
    
    const [count, setCount] = useState(0)

    function incrementCounterParent(by) {
        setCount(count + by)
    }

    function decrementCounterParent(by) {
        setCount(count - by)
    }
    function resetCounter(){
        setCount(0)
    }
    return (
        <div className='Counter'>
            <span className="totalCnt">{count}</span>
            <CounterButton by={1} incrementCounterParent={incrementCounterParent}
                decrementCounterParent={decrementCounterParent} />
            <CounterButton by={2} incrementCounterParent={incrementCounterParent} 
                decrementCounterParent={decrementCounterParent} />
            <CounterButton by={5} incrementCounterParent={incrementCounterParent} 
                decrementCounterParent={decrementCounterParent} />
            <button className="reset" onClick={resetCounter}>Reset</button>
        </div>
    )
}

Counter.propTypes = {
    by: PropTypes.number
}