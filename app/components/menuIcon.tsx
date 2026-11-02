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
        // if tab is valid, change the display
        tab? tab.style.display = "flex" : "hidden"

        // update the dot that shos tab diminished/closed
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
    // return the div with the data
    return (
        <div>
            <div className='z-40 content-center text-center '>
                <div id={i + "Menu"} className='w-2 h-2 rounded-3xl ' ></div>
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