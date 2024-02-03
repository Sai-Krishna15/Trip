import React, { useContext } from 'react'
import { TripContext } from '../Components/TripContext/TripContext'
import { useParams } from 'react-router-dom';
import PlaceDisplay from '../Components/PlaceDisplay/PlaceDisplay';

const Place = () => {
    const {all_places} = useContext(TripContext);
    const {placeId} = useParams()
    const place = all_places.find((e)=>e.id === Number(placeId))
  return (
    <div>
      <PlaceDisplay place = {place}/>
    </div>
  )
}

export default Place
