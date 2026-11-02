'use client'
import {useState, useEffect} from 'react';

const Carousel = ({className, content} : {
    // style
    className : string;
    // text string
    content : string[];
}) => {
    className = className + ' flex flex-col max-w-full wrap-break-word p-1.5';
    var i = 0;
    const [curr, setCurrentContent] = useState(content[0]);
    // handle side effects
    useEffect(() => {
        // update content every 1000 milliseconds
        const intervalId = setInterval(() => {
            if (i == content.length) {
                i = 0;
            }
            setCurrentContent(content[i]);
            i += 1; 
        }, 2000);

        // clear interval when component unmounts, prevent memory leaks
        return () => clearInterval(intervalId);
    }, []) // the [] are an empty dependency array; this allows the effect to only run once on mount
    
    // return the component
    return (
        <div className={className}>
            <p className='text-sm'><i>{curr}</i></p>
        </div>
    )

}

export default Carousel;
