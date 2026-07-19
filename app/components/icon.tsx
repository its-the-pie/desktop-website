'use client'
import { ReactNode } from 'react';

const Icon = ({children, imageURL}: {
    children: ReactNode
    imageURL: string
}) => {
    function handleClick() {
        //???
    }

    return (
        <button onClick={handleClick}>
            <img src={imageURL} className=''/>
            {children}
        </button>
    )
}

export default Icon;