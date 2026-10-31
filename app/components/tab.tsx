'use client'

import {ReactNode, useState} from 'react';
import React, { useRef, useEffect } from 'react';
import Draggable from "react-draggable";

const Tab = ({children, i, className, show}: {
    children: ReactNode
    i : string
    className : string
    show : string
}) => {
    const nodeRef = useRef(null);

    // handle the size & size-styling of the tab
    // true when full screen, false when not
    const [size, setSize] = useState(true);

    const [position, setPosition] = useState([0,0]);

    function clicked() {
        // Source - https://stackoverflow.com/a/59341431
// Posted by CertainPerformance, modified by community. See post 'Timeline' for change history
// Retrieved 2026-10-19, License - CC BY-SA 4.0

        const test = document.querySelectorAll<HTMLElement>('.tab');
        test.forEach(function(node) {
            if (node == document.getElementById(i)) {
                node.style.zIndex = "100";
            } else {
                node.style.zIndex = "50";
            }
        })
    }

    function close() {
        const tab = document.getElementById(i)
        tab? tab.style.display = "none" : ""
        const icon = document.getElementById(i + "Menu")
        icon? icon.classList.remove("bg-blue-300") : ""
        setSize(true)
    }

    function diminish() {
        const tab = document.getElementById(i)
        tab? tab.style.display = "none" : ""
        console.log(document.getElementById(i+"Menu"))
        const icon = document.getElementById(i + "Menu")
        icon? icon.classList.add("bg-blue-300") : ""
    }   

    function changeSize() {
        setSize(!size);
        console.log(size)
    }

    

    return (
        <div className={show + 'tab z-50' } id={i} onClick={clicked}>
            <Draggable nodeRef={(nodeRef)} disabled={size ? false : true} bounds={'body'}  position={size ? {x : position[0], y : position[1]} : {x : 0, y : 0} } onDrag={(e,data) => {
                setPosition([ data.x, data.y ])
            }}>
        
                <div className={className + (size ? ' w-150 h-100 absolute' : ' w-screen h-screen top-0 left-0 m-auto ') + '  rounded-xl text-xl shadow-black shadow-2xl top-1/4 left-1/4'}  ref={nodeRef} >
                    <div className='absolute top-0 w-full h-10 bg-gray-400 flex flex-row gap-7'>
                        <div className='flex flex-row p-3 gap-1'>
                            <button className='rounded-3xl w-4 h-4 bg-red-500 text-xs' onClick={close}>x</button>
                            <button className='rounded-3xl w-4 h-4 bg-yellow-500 text-xs' onClick={diminish}>-</button>
                            <button className='rounded-3xl w-4 h-4 bg-green-500 text-xs' onClick={changeSize}>/</button>
                        </div>
                        <div className=' text-xl bg-white my-1 px-10 rounded-md'>{i}</div>
                    </div>
                    
                    {children}
                </div>
            </Draggable>
        </div>
            
    )
}

export default Tab;