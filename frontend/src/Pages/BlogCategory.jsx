import React, { useContext } from 'react'
import BlogItem from '../Components/BlogItem/BlogItem'
import './CSS/BlogCategory.css'
import { TripContext } from '../Components/TripContext/TripContext'
const BlogCategory = (props) => {
  const { all_blogs } = useContext(TripContext)
  return (
    <>
      <div className="blog-item">
        <h1>Blog</h1>
        <p>Tips ,Stories and musings from the Team</p>
      </div>
      <div className='trip-category'>
        {all_blogs.map((item, i) => {
          if (props.category === item.category) {
            return <BlogItem key={i} id={item.id} name={item.name} image={item.image} date={item.date} description={item.description} />
          } else {
            return null
          }
        })}
      </div>
    </>
  )
}

export default BlogCategory
