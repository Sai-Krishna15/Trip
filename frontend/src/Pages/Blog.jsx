import React, { useContext } from 'react'
import { TripContext } from '../Components/TripContext/TripContext'
import { useParams } from 'react-router-dom';
import BlogDisplay from '../Components/BlogDisplay/BlogDisplay';

const Blog = () => {

    const {all_blogs} = useContext(TripContext)
    const {blogId} = useParams()
    const blog = all_blogs.find((e)=>e.id === Number(blogId))
  return (
    <div>
      <BlogDisplay blog = {blog}/>
    </div>
  )
}

export default Blog
