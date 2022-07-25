import React from 'react'
import './Navigator.css'


export default function Navigator() {
    return (
        // <BrowserRouter>
        <div className="Navigator">

        <nav> 
        <ul className="nav">
          {/* <li><Link to='SONAN' className="SONAN">SONAN</Link></li> */}
          <li>SHOP</li>
          <li style={{ textDecoration: 'none' }}>CUSTOMER</li>
        </ul>
      </nav>
        </div>
        // </BrowserRouter>
    )
}

