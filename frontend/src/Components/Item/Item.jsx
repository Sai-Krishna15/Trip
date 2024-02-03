import React from 'react'
import './Item.css'
import { Link } from 'react-router-dom'
const Item = (props) => {
    return (
        <div className='item'>
            <Link to={`/place/${props.id}`}><img src={props.image} alt='' /></Link>
            <h2>{props.name}</h2>
            <p>{props.country}</p>
        </div>
    )
}

export default Item
