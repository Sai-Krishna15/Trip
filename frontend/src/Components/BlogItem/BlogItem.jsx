import React from 'react'
import { Link } from 'react-router-dom'
import './BlogItem.css'
const BlogItem = (props) => {
  return (
      <div className='item'>
        <Link to={`/blog/${props.id}`}><img src={props.image} alt='' className='thumbnail' /></Link>
        <h2>{props.name}</h2>
        <p>{props.date}</p>
      </div>
  )
}

export default BlogItem
