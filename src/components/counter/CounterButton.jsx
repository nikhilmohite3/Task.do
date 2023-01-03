import './Counter.css';
import { PropTypes } from 'prop-types';


export default function CounterButton({ by, incrementCounterParent, decrementCounterParent }) {

    // Below methods can be called from onClick as well 
    // using Arrrow functions : () => 
    // function incrementCounter() {
    //     incrementCounterParent(by)
    // }

    // function decrementCounter() {
    //     decrementCounterParent(by)
    // }

    return (
        <div className="CounterButton">
            <button className="counterButton"
                onClick={() => incrementCounterParent(by)}>
                +{by}
            </button>

            <button className="counterButton"
                onClick={() => decrementCounterParent(by)}>
                -{by}
            </button>
        </div>
    )
}

CounterButton.propTypes = {
    by: PropTypes.number
}
