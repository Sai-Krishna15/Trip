import React from 'react'
import './HeroContent.css'
import plane from '../Assests/plane.webp'
import planner from '../Assests/planner.webp'
import mobile1 from '../Assests/mobile1.webp'
import mobile2 from '../Assests/mobile2.webp'
import mobile3 from '../Assests/mobile3.webp'
import content1_img1 from '../Assests/content1_img1.webp'
import content1_img2 from '../Assests/content1_img2.webp'
import content1_img3 from '../Assests/content1_img3.webp'
import trip_logo from '../Assests/trip_logo.jpg'
function HeroContent() {
    return (
        <>
            <div className='herocontent' id='howitworks'>
                <div className="hero-plane">
                    <img src={plane} alt="" />
                    <p>Organise Your Trips Easy Way with Trips!</p>
                </div>
            </div>
            <div className="hero-main1">
                <div className="content">
                    <h1 className='header1'>Travel Iteriranary Planner</h1>
                    <img src={planner} alt="" className='planner'/>
                    <h1 className='header2'>No More Struggling with word docs , Spreadsheets and Google Maps to Plan a Trip</h1>
                    <p>With a Trip Plannig Website you have one simple tool,you organise your Travel</p>
                    <p>Create a new Trip or Start with Iteriranary.Add activities and Accomodation.Drag-and-Drop these around your daily Schedule</p>
                    <p>Print,Publish and Share</p>
                    <p>Take your trips with iteriranaries with you on the road using the trip viewer app.you'll never be lost</p>
                    <div className="mobile-images">
                        <img src={mobile1} alt="" className='mobile'/>
                        <img src={mobile2} alt="" className='mobile'/>
                        <img src={mobile3} alt="" className='mobile'/>
                    </div>   
                    <div className="content-buttons">
                        <button>App Store</button>
                        <button>Google Play</button>
                    </div>
                    <p style={{textAlign:'center'}}>Search for 'Trip Travels' in App Store</p>
                    <button className='plan'>Enjoy Planning Your Trip Today!</button>
                </div>
            </div>
            <div className="hero-main2">
            <h1 style={{textAlign:'center',color:'#ff4141',padding:'20px 0px'}}>It all Starts with Travel Itinerary</h1>
                <div className="content1">
                    <div className="content1-left">
                        <p>A travel itinerary is a schedule of events relating to planned travel, generally including destinations to be visited at specified times and means of transportation to move between those destinations.</p>
                        <p>Planning a trip in advance gives everyone time to thoughtfully consider where they'd like to go and what they'd like to experience, as well as what their ideal time frame is for traveling.</p>
                        <p>Thus, the five types of itinerary can be tourist՚s itinerary, tour manager՚s itinerary, escort or guide՚s itinerary, vendor՚s itinerary and coach driver՚s itinerary.</p>
                        <p>An itinerary is your travel plan — where you will go and when you will be there. If you make plans to fly to Paris from Beijing or take a train to Chicago from Mexico City, you will need an itinerary.</p>
                        
                    </div>
                    <div className="content1-right">
                        <img src={content1_img1} alt="" />
                        <img src={content1_img2} alt="" />
                        <img src={content1_img3} alt="" />
                    </div>
                </div>
            </div>
            <div className="hero-description">
                <h1>Which of the Following Describes You?</h1>
                <div className="hero-descriptions">
                <div className="hero-description-left">
                    <h1>I am Looking for a tool to create,share/store travel iteranaries</h1>
                    <p>A travel itinerary is a schedule of events relating to planned travel, generally including destinations to be visited at specified times and means of transportation to move between those destinations.</p>
                    <p>There is much Easier way!</p>
                </div>
                <div className="hero-description-right">
                    <h1>I am Looking for Travel Iteranaries</h1>
                    <p>Planning a trip in advance gives everyone time to thoughtfully consider where they'd like to go and what they'd like to experience, as well as what their ideal time frame is for traveling. The same applies even if you're planning travel in advance for just yourself.</p>
                    <p>Change it fit your plans and go...</p>
                </div>
                </div>
            </div>
            <div className="hero-price" id='price'>
                <h1 style={{color:'orange',textAlign:'center'}}>Price Plans</h1>
                <div className="hero-prices">
                    <div className="price">
                        <h2>Free</h2>
                        <h1>$0</h1>
                        <p>We all Start here</p>
                        <p>1 trip</p>
                        <hr />
                        <p>20 activities/trip</p>
                    </div>
                    <div className="price">
                        <h2>Lite</h2>
                        <h1>$9</h1>
                        <p>For casual travel,single trip</p>
                        <p>1 trip</p>
                        <hr />
                        <p>200 activities/trip</p>
                    </div>
                    <div className="price">
                        <h2>Standard</h2>
                        <h1>$20</h1>
                        <p>For casual travel,multiple trip</p>
                        <p>10 trip</p>
                        <hr />
                        <p>20 activities/trip</p>
                    </div>
                    <div className="price">
                        <h2>Adventure</h2>
                        <h1>$40</h1>
                        <p>For Epic Travel and guides around the world</p>
                        <p>50 trip</p>
                        <hr />
                        <p>Unlimited activities</p>
                    </div>
                </div>
            </div>
            <div className="hero-last">
                <img src={trip_logo} alt="" />
                <h1>Trip</h1>
                <p>Like tens-of-thousand of other users,start planning your</p>
                <p>upcoming trip the smarter way,<span>Today!..</span></p>
                <button>Join for Free</button>
            </div>
        </>
    )
}

export default HeroContent
