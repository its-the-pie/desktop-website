'use client'
import Image from "next/image";
import {useState, useEffect} from 'react';

const ImageCarousel = ({className, src, name} : {
    className : string;
    src : string[];
    name : string[];
}) => {
    var i = 0;
    // get and set current photo
    const [currSrc, setCurrentSrc] = useState(src[0]);
    // get and set current name
    const [currName, setCurrentName] = useState(name[0])

    // handle side effects
    useEffect(() => {
        // update content every 1000 milliseconds
        const intervalId = setInterval(() => {
            if (i == src.length) {
                i = 0;
            }
            setCurrentSrc(src[i]);
            setCurrentName(name[i])
            i += 1; 
        }, 2000);

        // clear interval when component unmounts, prevent memory leaks
        return () => clearInterval(intervalId);
    }, []) // the [] are an empty dependency array; this allows the effect to only run once on mount
    
    // return the component
    return (
        <div className={'m-8 mt-16 flex gap-5' + className}>
            <div className="content-center w-1/2 h-8/12 relative">
                <Image 
                    src={currSrc}
                    alt={currSrc}
                    width={200}
                    height={200}
                    className="rounded-sm pointer-events-none overflow-clip relative"
                />
            </div>
            <div className="w-1/2 ">
                <p>{currName}</p>
            </div>
        </div>
    )

}

export default ImageCarousel;
