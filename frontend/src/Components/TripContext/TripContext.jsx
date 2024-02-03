import React, { createContext } from 'react'
import all_places from '../Assests/all_places';
import all_blogs from '../Assests/all_blogs';
import all_itineraries from '../Assests/all_itineraries';
export const TripContext = createContext(null);
const TripContextProvider = (props) => {
    const contextValue = {all_places,all_blogs,all_itineraries}
  return <TripContext.Provider value={contextValue}>
    {props.children}
  </TripContext.Provider>
}

export default TripContextProvider
