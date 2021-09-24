import React from 'react'

import DateCountdown from 'react-date-countdown-timer';

export default function CountDown() {

    return (

        <button style={{ padding: '10px', fontSize: '24px', fontWeight: 'bold', borderRadius: '5px', backgroundColor: '#4299e1', borderColor: 'white', borderWidth: '0px', color: 'white' }}>
            <DateCountdown dateTo='September 26, 2021 00:00:00 GMT+08:00' callback={() => alert('Hello')} /></button>
    )
}
