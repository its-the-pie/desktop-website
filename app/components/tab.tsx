'use client'

import {ReactNode, useState} from 'react';
import React, { useRef } from 'react';
import Draggable from "react-draggable";

const Tab = ({children, i}: {
    children: ReactNode
    i : string
}) => {
    const nodeRef = useRef(null);

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
    }

    function diminish() {
        
    }

    function changeSize() {

    }

    return (
        <div className='hidden z-50' id={i} ref={nodeRef} onClick={clicked}>
            <Draggable nodeRef={nodeRef}>
                <div className='top-1/4 right-1/4 absolute content-center text-center w-150 h-100 rounded-xl text-black text-xl bg-white shadow-black shadow-2xl'>
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