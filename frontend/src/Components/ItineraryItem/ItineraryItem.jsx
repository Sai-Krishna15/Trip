import React from 'react'
import { Link } from 'react-router-dom'
import './ItineraryItem.css'
const ItineraryItem = (props) => {
    return (
        <div className='item'>
            <Link to={`/itinerary/${props.id}`}><img src={props.image} alt='' /></Link>
            <h2>{props.name}</h2>
            <p>{props.country}</p>
            <p style={{color:'gray'}}>{props.date}</p>
            <p style={{color:'blueviolet'}}>👁{props.views}</p>
        </div>
    )
}

export default ItineraryItem
