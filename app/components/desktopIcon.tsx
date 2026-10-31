'use client'
import { ReactNode, useState, useRef } from 'react';
import Draggable from 'react-draggable';

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

        const icon = document.getElementById(i + "Menu")
        icon? icon.classList.remove("bg-blue-300") : ""

        const test = document.querySelectorAll<HTMLElement>('.tab');
        test.forEach(function(node) {
            if (node == document.getElementById(i)) {
                node.style.zIndex = "100";
            } else {
                node.style.zIndex = "50";
            }
        })
    }

    return (
        <Draggable nodeRef={nodeRef}>
            <div ref={nodeRef} className='z-10 content-center text-center'>
                <div className=' w-12 h-12 max-w-12 max-h-12 rounded-md'>
                    <button onDoubleClick={handleClick}>
                        <img src={imageURL} width={setWidth} className=' pointer-events-none'/>
                        {children}
                    </button>
                </div>
            </div>
        </Draggable>
    )
}

export default DesktopIcon;