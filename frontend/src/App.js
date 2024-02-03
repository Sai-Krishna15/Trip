import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Trip from './Pages/Trip';
import Footer from './Components/Footer/Footer'
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Signup from './Pages/Signup';
import TripCategory from './Pages/TripCategory';
import Place from './Pages/Place'
import BlogCategory from './Pages/BlogCategory';
import Blog from './Pages/Blog';
import ItineraryCategory from './Pages/ItineraryCategory';
import Itinerary from './Pages/Itinerary';
import Login from './Pages/Login';
import Home from './Pages/Home';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/home' element={<Home/>}/>
          <Route path='/' element={<Trip />} />
          <Route path='/places' element={<TripCategory category="place" />} />
          <Route path='/blogs' element={<BlogCategory category="blog" />} />
          <Route path='/itineraries' element={<ItineraryCategory category='itinerary'/>}/>
          <Route path='/place' element={<Place />}>
            <Route path=':placeId' element={<Place />} />
          </Route>
          <Route path='/blog' element={<Blog />}>
            <Route path=':blogId' element={<Blog />} />
          </Route>
          <Route path='/itinerary' element={<Itinerary />}>
            <Route path=':itineraryId' element={<Itinerary />} />
          </Route>
          <Route path='/signup' element={<Signup />} />
          <Route path='/login' element={<Login />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}
export default App;