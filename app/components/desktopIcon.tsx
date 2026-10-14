'use client'
import { ReactNode, useState, useRef } from 'react';
import Draggable from 'react-draggable';

const DesktopIcon = ({children, imageURL, i, setWidth}: {
    children: ReactNode
    imageURL: string
    i: string
    setWidth: string
}) => {
    const [isOpen, setIsOpen] = useState(false)
    const nodeRef = useRef(null);

    function handleClick() {
        // console.log(i)
        // let icon = document.getElementById(i);

        // if (icon != null) {
        //     console.log(icon.style.visibility)
            // if (icon.style.visibility == "visible") {
            //     icon.style.visibility = "hidden"
            // } else if (icon.style?.visibility == "hidden") {
            //     icon.style.visibility = "visible"
            // }
        // } else {
        //     console.log("booooo")
        // }
    }

    return (
        <Draggable nodeRef={nodeRef}>
            <div ref={nodeRef} className=' z-50 content-center text-center '>
                <div id={i} className=' w-12 h-12 max-w-12 max-h-12 rounded-md'>
                    <button onClick={handleClick}>
                        <img src={imageURL} width={setWidth} className=' pointer-events-none'/>
                        {children}
                    </button>
                </div>
            </div>
        </Draggable>
    )
}

export default DesktopIcon;