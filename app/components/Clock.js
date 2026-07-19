'use client'
import {useState, useEffect} from 'react';

function Clock() {
    // create variable currentTime with current date and time
    const [currentTime, setCurrentTime] = useState(new Date());
    // handle side effects
    useEffect(() => {
        // update time every 1000 milliseconds
        const intervalId = setInterval(() => {
            setCurrentTime(new Date());
        }, 1000);

        // clear interval when component unmounts, prevent memory leaks
        return () => clearInterval(intervalId);
    }, []) // the [] are an empty dependency array; this allows the effect to only run once on mount

    // formatting
    const formattedTime = currentTime.toLocaleTimeString();
    const formattedDate = currentTime.toDateString()
    
    // return the component
    return (
        <div className={'flex flex-col w-max p-1.5'}>
            <p className='time_style text-sm'>{formattedTime}</p>
            <p className='date_style text-sm'>{formattedDate}</p>
        </div>
    )

}

export default Clock;