import React from 'react'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'
import {FaCar} from 'react-icons/fa'
import '../../index.css'

function Navbar({title}) {
  return (
    <nav className='navbar'>
      <Link to = "/"className='project-title'>
        <FaCar className = "auto-pic"/>
        {title}
      </Link>
      <div className='navbar-links'>
        <ul>
          <li><Link to = '/'>Home</Link></li>
          <li><Link to = '/carstats'>Car Stats</Link></li>
          <li><Link to = '/compare'>Compare</Link></li>
          <li><Link to = '/rankings'>Rankings</Link></li>
          <li><Link to = '/about'>About</Link></li>
        </ul>
      </div>
      
    </nav>
  )
}
Navbar.defaultProps = {
  title:'Mobile Stats'
}
Navbar.propTypes = {
  title:PropTypes.string
}

export default Navbar