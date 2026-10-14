'use client'

import {ReactNode} from 'react';
import React, { useRef } from 'react';
import Draggable from "react-draggable";



const Tab = ({children}: {
    children: ReactNode
}) => {
    const nodeRef = useRef(null);
    function close() {
        
    }

    function diminish() {

    }

    function changeSize() {

    }

    return (
            <Draggable nodeRef={nodeRef}>
                <div ref={nodeRef} className='tab_box absolute z-500 content-center text-center w-150 h-100 rounded-xl text-black text-2xl bg-white'>
                    <div className='absolute top-0 w-full h-10 bg-gray-400 flex flex-row gap-7'>
                        <div className='flex flex-row p-3 gap-1'>
                            <button className='rounded-3xl w-4 h-4 bg-red-500 text-xs' onClick={close}>x</button>
                            <button className='rounded-3xl w-4 h-4 bg-yellow-500 text-xs' onClick={diminish}>-</button>
                            <button className='rounded-3xl w-4 h-4 bg-green-500 text-xs' onClick={changeSize}>/</button>
                        </div>
                        <div className=' text-xl bg-white my-1 px-10 rounded-md'> Hello</div>
                    </div>
                    
                    {children}
                </div>
            </Draggable>
    )
}

export default Tab;