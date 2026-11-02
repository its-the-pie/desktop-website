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

    // when clicked, show corresponding tab
    function handleClick() {
        const tab = document.getElementById(i)
        // is tab valid? if so change the display
        tab? tab.style.display = "flex" : "hidden"

        // control the dot that shows a tab has been diminished
        const icon = document.getElementById(i + "Menu")
        icon? icon.classList.remove("bg-blue-300") : ""

        // set the z-index (layer) of every div to a low number, and then bring the clicked one to the front
        const test = document.querySelectorAll<HTMLElement>('.tab');
        test.forEach(function(node) {
            if (node == document.getElementById(i)) {
                node.style.zIndex = "100";
            } else {
                node.style.zIndex = "50";
            }
        })
    }
// this is where the div is formatted and returned, using the given tab data
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