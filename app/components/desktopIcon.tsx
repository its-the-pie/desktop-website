'use client'
import { ReactNode, useState, useRef } from 'react';
import Draggable from 'react-draggable';
import Tab from './tab';

const DesktopIcon = ({children, imageURL, i, setWidth}: {
    children: ReactNode
    imageURL: string
    i: string
    setWidth: string
}) => {
    const nodeRef = useRef(null);

    function handleClick() {
        const tab = document.getElementById(i)
        tab? tab.style.display = "flex" : "hidden"
    }

    return (
        <Draggable nodeRef={nodeRef}>
            <div ref={nodeRef} className=' z-50 content-center text-center '>
                <div className=' w-12 h-12 max-w-12 max-h-12 rounded-md'>
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