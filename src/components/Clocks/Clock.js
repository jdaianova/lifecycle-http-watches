import { useState, useEffect } from 'react';

function Clock({ city, timezone, onRemove }) {
    const [time, setTime] = useState(new Date());
    const formattedTime = time.toLocaleTimeString(
                                "en-US",
                                {
                                    timeZone: timezone,
                                    hour12: false,
                                    hour: "2-digit",
                                    minute: "2-digit",
                                    second: "2-digit"
                                }
    );
    
    useEffect(() => {
        const timer = setInterval(() => {
            setTime(new Date());
        }, 1000);
        return () => {clearInterval(timer)};
    }, []);


    return (
        <li className='Clock'>
            <h3>{city}</h3>
            <div className='Clock-numbers'>{formattedTime}</div>
            <button onClick={() => onRemove(city)}>delete</button> 
        </li>
    )
};

export default Clock;