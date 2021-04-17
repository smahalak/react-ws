
import { useState } from 'react';
import './Switch.css';

function Switch() {

    const [onOff, switchState] = useState('off')

    function handleOn() {
        switchState('on')
    }

    function handleOff() {
        switchState('off')
    }




    return (
        <div className="Switch" >
            <h3>Switch</h3>
            <p>{onOff}</p>
            <p>
                <button type="button" onClick={handleOn} >On</button>
                <button type="button" onClick={handleOff} >Off</button>
            </p>
        </div>
    )

}

export default Switch