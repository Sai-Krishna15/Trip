import React, { useContext } from 'react'
import { TripContext } from '../Components/TripContext/TripContext'
import ItineraryItem from '../Components/ItineraryItem/ItineraryItem'
import './CSS/ItineraryCategory.css'
const ItineraryCategory = (props) => {
  const { all_itineraries } = useContext(TripContext)
  return (
    <>
      <div className="blog-item">
        <h1>Itineraries</h1>
        <p>Inspiration and launch plans for your next Trip</p>
      </div>
      <div className='trip-category'>
        {all_itineraries.map((item, i) => {
          if (props.category === item.category) {
            return <ItineraryItem key={i} id={item.id} name={item.name} image={item.image} country={item.country} date={item.date} views={item.views}/>
          } else {
            return null
          }
        })}
      </div>
    </>
  )
}

export default ItineraryCategory
