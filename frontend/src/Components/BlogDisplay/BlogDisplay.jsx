import React from 'react'
import './BlogDisplay.css'
const BlogDisplay = (props) => {
    const {blog} = props
  return (
    <div className='placedisplay'>
      <img src={blog.image} alt="" />
      <h2>{blog.date}</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non, illo quibusdam molestiae porro, nisi repellat ut laudantium ipsam blanditiis iure sunt deleniti labore accusantium corrupti assumenda dolores, exercitationem animi ex accusamus nostrum adipisci. Ratione sed reiciendis, quaerat odio, nobis eveniet magni qui quas error sequi aliquam ducimus enim corrupti quod temporibus doloremque facere officia cupiditate aperiam? Asperiores optio, eum accusamus distinctio magnam dolorem provident ab enim animi! Aperiam qui delectus aut deserunt ex, odit aliquam similique tempora omnis enim itaque sunt quidem voluptate recusandae? Necessitatibus officiis a, molestiae voluptas explicabo aliquam repellendus quam mollitia, hic eos impedit et ad perferendis.</p>
    </div>
  )
}

export default BlogDisplay
