import React, { useEffect, useState } from 'react'
import './Star.css'


interface StarComponentProps {
    starUrl: string;
    index: number;
    onClick: (index:number)=> void;
}


export const Star: React.FC<StarComponentProps> = ({starUrl, index, onClick}) => {

    const handleClick = () => onClick(index);
    
    return (
    <div className='star-container' onClick={handleClick}>
        <img src={starUrl}/>
    </div>
    )
}
