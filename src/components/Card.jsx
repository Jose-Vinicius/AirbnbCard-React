import React from 'react';

import Star from '../../public/assets/image/star.png'

export default function Card(props){
    let classBadge
    let badgeText
    if (props.openSpots === 0) {
        badgeText = "SOLD OUT"
        classBadge ='card__badge--sold'
    } else if (props.location === "Online") {
        badgeText = "ONLINE"
        classBadge ='card__badge--online'
    }
    
    return(
        <div className='card'>
            {badgeText && <div className={classBadge}>{badgeText}</div>}
            <img src={`/assets/person/${props.coverImg}`} />
            <div className='card__content'>
                <img src={Star}/>
                <span>
                    {props.stats.rating}
                </span>
                <span className="card__content--gray">
                    ({props.stats.reviewCount})
                </span>
                <span className="card__content--gray">
                    • {props.country}
                </span>
            </div>
            <p className='card__description'>
                    {props.title}
            </p>
            <span className='card__value'>
                <span className='card__value--bold'>From ${props.price}</span> / Person
            </span>
        </div>
    )
}