import React from 'react'
import './Navigator.css'
import {Link} from 'react-router-dom'

export default function Navigator() {
  return (
    
    <div className="Navigator">

      <nav>
        <ul className="nav">
            <li><Link to='sonanbody' className="Sonanbody">SONAN</Link></li>
            {/* <li>SONAN</li> */}
            <li>SHOP</li>
            <li style={{ textDecoration: 'none' }}>CUSTOMER</li>
       
        </ul>
      </nav>
    </div>
   
  )
}

