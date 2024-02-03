import React, { useContext } from 'react'
import Item from '../Components/Item/Item'
import { TripContext } from '../Components/TripContext/TripContext'
import './CSS/Tripcategory.css'
const TripCategory = (props) => {
  const { all_places } = useContext(TripContext)
  return (
    <>
      <div className="blog-item">
        <h1>Places</h1>
        <p>Epic Bucket List Places to add to your naxt Itinarary</p>
      </div>
      <div className='trip-category'>
        {all_places.map((item, i) => {
          if (props.category === item.category) {
            return <Item key={i} id={item.id} name={item.name} image={item.image} country={item.country} />
          } else {
            return null
          }
        })}
      </div>
    </>
  )
}

export default TripCategory
