'use client'

import {ReactNode} from 'react';
import React, { useRef } from 'react';
import Draggable from "react-draggable";


const Tab = ({children}: {
    children: ReactNode
}) => {
    const nodeRef = useRef(null);
    return (
        <div className='z-100 top-0 fixed w-full h-full flex justify-center items-center'>
            <Draggable nodeRef={nodeRef}>
                <div ref={nodeRef} className='tab_style'>
                    {children}
                </div>
            </Draggable>
        </div> 
    )
}

export default Tab;