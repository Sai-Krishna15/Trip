import React, { useContext } from 'react'
import { TripContext } from '../Components/TripContext/TripContext'
import { useParams } from 'react-router-dom';
import ItineraryDisplay from '../Components/ItineraryDisplay/ItineraryDisplay';

const Itinerary = () => {
    const {all_itineraries} = useContext(TripContext);
    const {itineraryId} = useParams()
    const itinerary = all_itineraries.find((e)=>e.id === Number(itineraryId))
  return (
    <div>
      <ItineraryDisplay itinerary = {itinerary}/>
    </div>
  )
}

export default Itinerary

