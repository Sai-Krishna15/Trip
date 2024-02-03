import React from 'react'
import './PlaceDisplay.css'
const PlaceDisplay = (props) => {
  const {place} = props
  return (
    <div className='placedisplay'>
      <img src={place.image} alt="" />
      <h2>{place.name}</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem blanditiis alias ipsam accusantium consectetur aperiam magni corporis? Perspiciatis vitae, qui eum quidem optio maxime ab veritatis nostrum eaque cum laborum ipsam architecto, libero aperiam voluptate officia sequi accusantium mollitia quibusdam! Repudiandae consequuntur tempore sunt asperiores. Et quos nihil totam porro sit saepe ex ab voluptatibus natus vel vero error, numquam voluptatem delectus molestiae quaerat architecto esse praesentium! Nulla officiis quibusdam aspernatur quod. Et omnis molestias minima quam ipsum quos impedit accusamus suscipit dignissimos iusto aperiam laudantium vitae, natus dolores unde beatae eius aliquid nostrum harum culpa, possimus sed repellat. Ratione.</p>
    </div>
  )
}

export default PlaceDisplay
