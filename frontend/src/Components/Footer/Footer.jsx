import React from 'react'
import './Footer.css'
import trip_logo from '../Assests/trip_logo.jpg'
import insta from '../Assests/insta_icon.png'
import facebook from '../Assests/facebook_icon.png'
import twitter from '../Assests/twitter_icon.webp'
import pinterest from '../Assests/pinterest_icon.png'
import linked from '../Assests/linked_icon.png'
function Footer() {
  return (
    <div className='footer'>
      <div className="footer-left">
        <img src={trip_logo} alt="" />
        <p>© 2024 Trip IntI Ltd <span>Trip Itiranary Planner</span></p>
      </div>
      <div className="footer-right">
        <ul className='footer-list'>
            <li>Contact</li>
            <li>About</li>
            <li>Privacy</li>
            <li>Terms</li>
            <li>Blog</li>
            <li>Sitemap</li>
            <li>How To</li>
            <li><img src={insta} alt="" /></li>
            <li><img src={facebook} alt="" /></li>
            <li><img src={twitter} alt="" /></li>
            <li><img src={linked} alt="" /></li>
            <li><img src={pinterest} alt="" /></li>
        </ul>
      </div>
    </div>
  )
}

export default Footer
