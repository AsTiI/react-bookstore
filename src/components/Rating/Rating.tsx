import React, { useEffect, useState } from 'react'
import { Star } from './Star/Star'
import './Rating.css'
import starUrl1 from '../../images/star1.png'
import starUrl2 from '../../images/star2.png'

interface IStar{
    url: string
}
const initialStar:IStar[] = [
    {url: starUrl1},
    {url: starUrl1},
    {url: starUrl1},
    {url: starUrl1},
    {url: starUrl1}
]

const Rating = () => {
    const countStars = 5
    const [starUrl, setStarUrl] = useState<IStar[]>([])
    
    useEffect(()=>{
        setStarUrl(initialStar)
    },[])

    const handleClick = (index:number) => {
        // setStarUrl(starUrl.map((star,starInd)=>index<=starInd && star.url != starUrl2?{url: starUrl2}:{url: starUrl1}))

        setStarUrl(starUrl.map((star,starInd)=>index>=starInd?{url: starUrl2}:{url: starUrl1}))
    }

    return (
        <div className='rating-container'>
            <div className="rating-wrapper">
                {starUrl.map((star, index)=> <Star key={index} starUrl={star.url} index={index} onClick={handleClick}/>)}
            </div>  
        </div>
    )
}

export default Rating