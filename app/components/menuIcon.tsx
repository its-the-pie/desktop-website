'use client'
import { ReactNode, useState, useRef } from 'react';
import Popip from 'reactjs-popup';

const MenuIcon = ({children, imageURL, i, setWidth}: {
    children: ReactNode
    imageURL: string
    i: string
    setWidth: string
}) => {
    const ref = useRef(null);

    function handleClick() {
        const tab = document.getElementById(i)
        tab? tab.style.display = "flex" : "hidden"
        const test = document.querySelectorAll<HTMLElement>('.tab');
        test.forEach(function(node) {
            console.log(node)
            console.log(document.getElementById(i))
            if (node == document.getElementById(i)) {
                console.log("match")
                node.style.zIndex = "100";
            } else {
                node.style.zIndex = "50";
            }
        })
    }

    return (
        <div>
            <div className='z-40 content-center text-center '>
                <div id={i} className=' w-12 h-12 max-w-12 max-h-12 rounded-md'>
                    <button onClick={handleClick}>
                        <img src={imageURL} width={setWidth} className=' pointer-events-none'/>
                        {children}
                    </button>
                </div>
            </div>
        </div>
    )
}

export default MenuIcon;