import React from 'react'
import './Navigator.css'
import {Link} from 'react-router-dom'

export default function Navigator() {
  return (
    
    <div className="Navigator">

      <nav>
        <ul className="nav">
            <li><Link to='sonan' className="list">SONAN</Link></li>
            {/* <li>SONAN</li> */}
            <li>SHOP</li>
            <li style={{ textDecoration: 'none' }}>CUSTOMER</li>
       
        </ul>
      </nav>
    </div>
   
  )
}

