import React from 'react'
import './ItineraryDisplay.css'
const ItineraryDisplay = (props) => {
  const { itinerary } = props
  return (
    <div className='itinerary-display'>
      <div className="itinerary-top">
        <img src={itinerary.image} alt="" />
        <div className="itinerary-top-matter">
          <h1>{itinerary.name}</h1>
          <p>{itinerary.country}</p>
          <p>{itinerary.date}</p>
          <button>Get Free Itinerary</button>
        </div>
      </div>
      <div className="itinerary-bottom">
        <h1>Activities</h1>
        <div className="itinerary-bottom-content">
          <div className="itinerary-bottom-left">
            <p>Day</p>
            <h1>1</h1>
          </div>
          <div className="itinerary-bottom-right">
            <div className="itinerary-bottom-right-content">
              <div className='one'>
                <p>9am</p>
                <h3>Lion's Head</h3>
                <img src={itinerary.image} alt="" />
              </div>
              <div className='one'>
                <p>11am</p>
                <h3>Balai Neonora</h3>
                <img src={itinerary.image} alt="" />
              </div>
              <div className='one'>
                <p>1pm</p>
                <h3>Laperal House</h3>
                <img src={itinerary.image} alt="" />
              </div>
              <div className='one'>
                <p>4pm</p>
                <h3>Burnam Park</h3>
                <img src={itinerary.image} alt="" />
              </div>
              <div className='one'>
                <p>5pm</p>
                <h3>National Zoo</h3>
                <img src={itinerary.image} alt="" />
              </div>
              <div className='one'>
                <p>7pm</p>
                <h3>Temple</h3>
                <img src={itinerary.image} alt="" />
              </div>
              <div className='one'>
                <p>9pm</p>
                <h3>Dinner & Stay</h3>
                <img src={itinerary.image} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ItineraryDisplay
