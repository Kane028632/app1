import React, { useState } from 'react'
export function Eventdata() {

    const [status, setStatus] = useState('Start')
    const onClickStartStop = () => {
    setStatus(status === 'Start' ? 'Stop' : 'Start')
    }

    const onClickAdd = (text) => {
        let r = eval(text)
        alert(`${text} = ${r}`)
    }

    return (
        <div style={{ textAlign:'center', marginTop:20 }}>
            <button onClick={onClickStartStop}>{status}</button><br/><br/>

            <button onClick={() => onClickAdd('10 + 20')}>
                10 + 20
            </button><br/><br/>

            <button onClick={() => onClickAdd('30 * 40')}>
                30 * 40
            </button><br/><br/>
        </div>
    )
}
