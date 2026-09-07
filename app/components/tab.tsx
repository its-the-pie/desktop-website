'use client'

import {ReactNode} from 'react';
import React, { useRef } from 'react';
import Draggable from "react-draggable";



const Tab = ({children}: {
    children: ReactNode
}) => {
    const nodeRef = useRef(null);

    return (
            <Draggable nodeRef={nodeRef}>
                <div ref={nodeRef} className=' absolute z-500 content-center text-center w-150 h-100 rounded-xl text-black text-2xl bg-white'>
                    <div className='absolute top-0 w-full h-10 bg-gray-400 flex flex-row gap-7'>
                        <div className='flex flex-row p-3 gap-1'>
                            <div className='rounded-3xl w-4 h-4 bg-red-500 text-xs'>x</div>
                            <div className='rounded-3xl w-4 h-4 bg-yellow-500 text-xs'>-</div>
                            <div className='rounded-3xl w-4 h-4 bg-green-500 text-xs'>/</div>
                        </div>
                        <div className=' text-xl bg-white my-1 px-10 rounded-md'> Hello</div>
                    </div>
                    
                    {children}
                </div>
            </Draggable>
    )
}

export default Tab;