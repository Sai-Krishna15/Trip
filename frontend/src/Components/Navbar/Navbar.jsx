import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'
function Navbar() {

    return (
        <div className='navbar'>
            <div className="nav-left">
                <div className="nav-logo">
                    <li style={{ listStyleType: 'none' }}><Link to='/' style={{ textDecoration: 'none', color: 'orange' }}>Trip</Link></li>
                </div>
                <ul className='nav-menu-left'>
                    <li><Link to='/itineraries' style={{ textDecoration: 'none', color: 'white' }}>Itineraries</Link></li>
                    <li><Link to='/places' style={{ textDecoration: 'none', color: 'white' }}>Places</Link></li>
                    <li><Link to='/blogs' style={{ textDecoration: 'none', color: 'white' }}>Blogs</Link></li>
                </ul>
            </div>
            <div className="nav-right">
                <ul className='nav-menu-right'>
                    
                    <li><Link to='/home' style={{ textDecoration: 'none', color: 'white' }}>Home</Link></li>
                    <li><Link to='/signup' style={{ textDecoration: 'none', color: 'white' }}>Sign In</Link></li>
                    
                    
                    
                </ul>
            </div>
        </div>
    )
}

export default Navbar
